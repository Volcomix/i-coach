import ButtonBase from '@material-ui/core/ButtonBase'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import exercises from '../exercises'
import { IntervalType } from '../types'
import TimerControls from './TimerControls'
import TimerExercise from './TimerExercise'
import TimerIntervalProgress from './TimerIntervalProgress'
import TimerIntervalTime from './TimerIntervalTime'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: theme.spacing(11),
      overflowX: 'hidden',
      '--interval-size': `min(100vw, 100vh - ${
        theme.typography.h4.lineHeight
      } * ${
        theme.typography.h4.fontSize
      } - var(--exercise-name-height) - ${theme.spacing(11)}px)`,

      [theme.breakpoints.down('xs')]: {
        '--exercise-name-height': `2 * ${theme.typography.h3.lineHeight} * ${theme.typography.h3.fontSize}`,
      },
      [theme.breakpoints.up('sm')]: {
        '--exercise-name-height': `${theme.typography.h3.lineHeight} * ${theme.typography.h3.fontSize}`,
      },
      '&.disabled': {
        cursor: 'auto',
      },
    },
    backButton: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
      zIndex: theme.zIndex.drawer,
    },
    interval: {
      position: 'relative',
      display: 'flex',
      width: 'calc(var(--interval-size))',
    },
  })
)

export default function Timer() {
  const classes = useStyles()
  const history = useHistory()

  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [intervalType, setIntervalType] = useState<IntervalType>('prepare')
  const [intervalCurrentTime, setIntervalCurrentTime] = useState(0)
  const [isTimerRunning, setTimerRunning] = useState(false)
  const [timerLastStart, setTimerLastStart] = useState(Date.now())
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  const exercise = exercises[exerciseIndex]

  const intervalDuration =
    intervalType === 'prepare'
      ? exercise.prepareDuration
      : exercise.workDuration

  let trainingCurrentTime = 0
  let trainingDuration = 0

  exercises.forEach((exercise, i) => {
    const exerciseTime = exercise.prepareDuration + exercise.workDuration
    if (i < exerciseIndex) {
      trainingCurrentTime += exerciseTime
    } else if (i === exerciseIndex) {
      if (intervalType === 'work') {
        trainingCurrentTime += exercise.prepareDuration
      }
      trainingCurrentTime += intervalCurrentTime
    }
    trainingDuration += exerciseTime
  })

  useEffect(() => {
    // Enforces the initial timer animation
    setTimeout(() => {
      setTimerRunning(true)
    }, 0)
  }, [])

  useEffect(() => {
    if (!isTimerRunning) {
      return
    }
    let wakeLock: any = null

    async function requestWakeLock() {
      if ('wakeLock' in navigator) {
        try {
          wakeLock = await (navigator as any).wakeLock.request('screen')
        } catch (error) {
          console.error(`${error.name}, ${error.message}`)
        }
      }
    }
    requestWakeLock()

    return () => {
      if (wakeLock !== null) {
        wakeLock.release()
        wakeLock = null
      }
    }
  }, [isTimerRunning])

  useEffect(() => {
    if (!isTimerRunning) {
      return
    }
    const timer = setInterval(() => {
      setIntervalCurrentTime((prevIntervalTime) => prevIntervalTime + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isTimerRunning])

  useEffect(() => {
    if (intervalCurrentTime === intervalDuration) {
      if (intervalType === 'prepare') {
        setIntervalType('work')
      } else {
        if (exerciseIndex === exercises.length - 1) {
          return history.goBack()
        }
        setExerciseIndex(exerciseIndex + 1)
        setIntervalType('prepare')
      }
      setIntervalCurrentTime(0)
    }
  }, [
    history,
    exerciseIndex,
    intervalType,
    intervalCurrentTime,
    intervalDuration,
  ])

  useEffect(() => {
    if (window.AudioContext) {
      const audioContext = new AudioContext()
      setAudioContext(audioContext)
      return () => {
        audioContext.close()
      }
    }
  }, [])

  useEffect(() => {
    const remainingTime = intervalDuration - intervalCurrentTime
    if (!audioContext || !isTimerRunning || remainingTime > 3) {
      return
    }
    const oscillator = audioContext.createOscillator()
    oscillator.type = 'triangle'
    oscillator.frequency.value = remainingTime === 0 ? 880 : 523.2511
    oscillator.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(
      audioContext.currentTime + (remainingTime === 0 ? 0.5 : 0.3)
    )
  }, [intervalCurrentTime, intervalDuration, isTimerRunning, audioContext])

  return (
    <ButtonBase
      component="div"
      aria-label="pause"
      className={clsx(classes.root, !isTimerRunning && 'disabled')}
      disableTouchRipple={!isTimerRunning}
      onClick={() => {
        if (!isTimerRunning) return
        setTimerRunning(false)
      }}
    >
      <Fade in={!isTimerRunning}>
        <IconButton
          aria-label="back"
          className={classes.backButton}
          color="inherit"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </IconButton>
      </Fade>
      <div className={classes.interval}>
        <TimerIntervalProgress
          intervalType={intervalType}
          intervalCurrentTime={intervalCurrentTime}
          intervalDuration={intervalDuration}
          isTimerRunning={isTimerRunning}
        />
        <TimerIntervalTime
          intervalType={intervalType}
          intervalCurrentTime={intervalCurrentTime}
          intervalDuration={intervalDuration}
          timerLastStart={timerLastStart}
        />
      </div>
      <TimerExercise
        intervalType={intervalType}
        exerciseIndex={exerciseIndex}
        exerciseName={exercise.name}
      />
      <TimerControls
        exerciseIndex={exerciseIndex}
        exerciseCount={exercises.length}
        trainingCurrentTime={trainingCurrentTime}
        trainingDuration={trainingDuration}
        isTimerRunning={isTimerRunning}
        onPreviousClick={() => {
          if (intervalType === 'prepare' && intervalCurrentTime === 0) {
            setExerciseIndex(exerciseIndex - 1)
          } else {
            setIntervalType('prepare')
            setIntervalCurrentTime(0)
          }
        }}
        onPlayClick={() => {
          if (!isTimerRunning) {
            setTimerLastStart(Date.now())
          }
          setTimerRunning(!isTimerRunning)
        }}
        onNextClick={() => {
          setExerciseIndex(exerciseIndex + 1)
          setIntervalType('prepare')
          setIntervalCurrentTime(0)
        }}
      />
    </ButtonBase>
  )
}
