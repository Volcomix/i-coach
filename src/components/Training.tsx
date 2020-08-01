import ButtonBase from '@material-ui/core/ButtonBase'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import clsx from 'clsx'
import React, { CSSProperties, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CSSTransition from 'react-transition-group/CSSTransition'
import SwitchTransition from 'react-transition-group/SwitchTransition'
import exercises from '../exercises'
import { IntervalType } from '../types'
import TimerControls from './TimerControls'
import TimerIntervalProgress from './TimerIntervalProgress'
import TimerIntervalTime from './TimerIntervalTime'

enum SlideDirection {
  Left,
  Right,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&.disabled': {
        cursor: 'auto',
      },
      overflowX: 'hidden',
    },
    backButton: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },
    intervalTime: {
      marginTop: -theme.spacing(12),
      width: 'min(100vw, 70vh)',
      height: 'min(100vw, 70vh)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 'calc(0.4 * min(100vw, 70vh))',
      fontWeight: 500,
      transitionProperty: 'color',
      transitionDuration: `${theme.transitions.duration.short}ms`,
      transitionTimingFunction: theme.transitions.easing.easeOut,
      '& .MuiCircularProgress-svg': {
        transitionProperty: 'color',
        transitionDuration: `${theme.transitions.duration.short}ms`,
        transitionTimingFunction: theme.transitions.easing.easeOut,
      },
    },
    intervalTimeSeconds: {
      transition: `transform ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,
      '.countdown &.enter': {
        transform: 'scale(1)',
      },
      '.countdown &.enter-active': {
        transform: 'scale(1.001)',
        transition: 'transform 500ms cubic-bezier(0, 0, 0.5, 250)',
      },
    },
    intervalProgress: {
      position: 'absolute',
      top: theme.spacing(3),
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
    intervalProgressTrack: {
      position: 'absolute',
      opacity: 0.1,
    },
    intervalProgressIndicator: {
      '&.running .MuiCircularProgress-circle': {
        transitionDuration: '1s',
        transitionTimingFunction: 'linear',
      },
      '&.running.done .MuiCircularProgress-circle': {
        transitionDuration: '300ms',
        transitionTimingFunction: theme.transitions.easing.easeInOut,
      },
    },
    exercise: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    next: {
      ...theme.typography.h4,
      height: `calc(${theme.typography.h4.lineHeight} * ${theme.typography.h4.fontSize})`,
      color: theme.palette.text.secondary,
    },
    exerciseName: {
      ...theme.typography.h3,
      height: `calc(${theme.typography.h3.lineHeight} * ${theme.typography.h3.fontSize})`,
      fontWeight: 500,
      '&.appear, &.enter': {
        opacity: 0,
        transform: 'translateX(var(--enter-translate-x))',
      },
      '&.appear-active, &.enter-active': {
        opacity: 1,
        transform: 'none',
        transition: `opacity 100ms linear, transform 100ms ${theme.transitions.easing.easeOut}`,
      },
      '&.exit': {
        opacity: 1,
        transform: 'none',
      },
      '&.exit-active': {
        opacity: 0,
        transform: 'translateX(var(--exit-translate-x))',
        transition: `opacity 100ms linear, transform 100ms ${theme.transitions.easing.easeIn}`,
      },
    },
  })
)

export default function Training() {
  const classes = useStyles()
  const history = useHistory()

  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [intervalType, setIntervalType] = useState<IntervalType>('prepare')
  const [intervalCurrentTime, setIntervalCurrentTime] = useState(0)
  const [isTimerRunning, setTimerRunning] = useState(false)
  const [isIntervalDone, setIntervalDone] = useState(false)
  const [slideDirection, setSlideDirection] = useState(SlideDirection.Left)
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
      setIntervalDone(false)
    } else if (isTimerRunning && intervalCurrentTime === intervalDuration - 1) {
      const timer = setTimeout(() => {
        setIntervalDone(true)
      }, 650)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [
    history,
    exerciseIndex,
    intervalType,
    intervalCurrentTime,
    intervalDuration,
    isTimerRunning,
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
    oscillator.frequency.value = remainingTime === 0 ? 880 : 440
    oscillator.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(
      audioContext.currentTime + (remainingTime === 0 ? 0.5 : 0.1)
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
        setIntervalDone(false)
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
      {false ? (
        <React.Fragment>
          <TimerIntervalProgress intervalType={intervalType} />
          <TimerIntervalTime
            intervalType={intervalType}
            intervalCurrentTime={intervalCurrentTime}
            intervalDuration={intervalDuration}
            timerLastStart={timerLastStart}
          />
        </React.Fragment>
      ) : (
        <Typography
          className={clsx(
            classes.intervalTime,
            isTimerRunning &&
              intervalDuration - intervalCurrentTime <= 3 &&
              'countdown'
          )}
          variant="h1"
          color={intervalType === 'prepare' ? 'textSecondary' : 'textPrimary'}
        >
          <SwitchTransition>
            <CSSTransition
              key={`${timerLastStart}-${intervalCurrentTime}`}
              timeout={500}
              exit={false}
            >
              <span className={classes.intervalTimeSeconds}>
                {intervalDuration - intervalCurrentTime}
              </span>
            </CSSTransition>
          </SwitchTransition>
          <div className={classes.intervalProgress}>
            <CircularProgress
              className={classes.intervalProgressTrack}
              variant="determinate"
              color={intervalType === 'prepare' ? 'inherit' : 'primary'}
              size="100%"
              thickness={1.5}
              value={100}
            />
            <CircularProgress
              className={clsx(
                classes.intervalProgressIndicator,
                isTimerRunning && 'running',
                isIntervalDone && 'done'
              )}
              variant="static"
              color={intervalType === 'prepare' ? 'inherit' : 'primary'}
              size="100%"
              thickness={1.5}
              value={
                isIntervalDone
                  ? 0
                  : (100 *
                      (isTimerRunning
                        ? intervalCurrentTime + 1
                        : intervalCurrentTime)) /
                    intervalDuration
              }
            />
          </div>
        </Typography>
      )}
      {true && (
        <div
          className={classes.exercise}
          style={
            {
              '--enter-translate-x':
                slideDirection === SlideDirection.Left ? '200px' : '-200px',
              '--exit-translate-x':
                slideDirection === SlideDirection.Left ? '-200px' : '200px',
            } as CSSProperties
          }
        >
          <div className={classes.next}>
            <Grow in={intervalType === 'prepare'}>
              <div>Next</div>
            </Grow>
          </div>
          <SwitchTransition>
            <CSSTransition key={exerciseIndex} timeout={100} appear>
              <span className={classes.exerciseName}>{exercise.name}</span>
            </CSSTransition>
          </SwitchTransition>
        </div>
      )}
      <TimerControls
        exerciseIndex={exerciseIndex}
        exerciseCount={exercises.length}
        trainingCurrentTime={trainingCurrentTime}
        trainingDuration={trainingDuration}
        isTimerRunning={isTimerRunning}
        onPreviousClick={() => {
          if (intervalType === 'prepare' && intervalCurrentTime === 0) {
            setExerciseIndex(exerciseIndex - 1)
            setSlideDirection(SlideDirection.Right)
          } else {
            setIntervalType('prepare')
            setIntervalCurrentTime(0)
          }
        }}
        onPlayClick={() => {
          if (!isTimerRunning) {
            setSlideDirection(SlideDirection.Left)
            setTimerLastStart(Date.now())
          }
          setTimerRunning(!isTimerRunning)
        }}
        onNextClick={() => {
          setExerciseIndex(exerciseIndex + 1)
          setIntervalType('prepare')
          setIntervalCurrentTime(0)
          setSlideDirection(SlideDirection.Left)
        }}
      />
    </ButtonBase>
  )
}
