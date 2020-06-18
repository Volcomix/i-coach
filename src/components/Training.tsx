import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import exercises from '../exercises'

enum IntervalType {
  Prepare,
  Work,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
    },
    trainingProgress: {
      height: theme.spacing(1),
    },
    appBar: {
      top: 'auto',
      bottom: -theme.spacing(9),
      transition: `bottom ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      '&.open': {
        bottom: 0,
      },
    },
    controlBar: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      justifyContent: 'center',
    },
    noShadow: {
      boxShadow: theme.shadows[0],
    },
  })
)

export default function Training() {
  const classes = useStyles()
  const history = useHistory()

  const [exerciseId, setExerciseId] = useState(0)
  const [intervalType, setIntervalType] = useState(IntervalType.Prepare)
  const [intervalTime, setIntervalTime] = useState(0)
  const [isControlsVisible, setControlsVisible] = useState(false)
  const [isTimerRunning, setTimerRunning] = useState(true)

  const exercise = exercises[exerciseId]

  const maxIntervalTime =
    intervalType === IntervalType.Prepare
      ? exercise.prepareTime
      : exercise.workTime

  let trainingTime = 0
  let maxTrainingTime = 0

  exercises.forEach((exercise, i) => {
    const exerciseTime = exercise.prepareTime + exercise.workTime
    if (i < exerciseId) {
      trainingTime += exerciseTime
    } else if (i === exerciseId) {
      if (intervalType === IntervalType.Work) {
        trainingTime += exercise.prepareTime
      }
      trainingTime += intervalTime
    }
    maxTrainingTime += exerciseTime
  })

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
      setIntervalTime((prevIntervalTime) => prevIntervalTime + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isTimerRunning])

  useEffect(() => {
    if (intervalTime === maxIntervalTime) {
      if (intervalType === IntervalType.Prepare) {
        setIntervalType(IntervalType.Work)
      } else {
        if (exerciseId === exercises.length - 1) {
          return history.goBack()
        }
        setExerciseId(exerciseId + 1)
        setIntervalType(IntervalType.Prepare)
      }
      setIntervalTime(0)
    }
  }, [history, exerciseId, intervalType, intervalTime, maxIntervalTime])

  return (
    <ButtonBase
      component="div"
      className={classes.root}
      disableTouchRipple={isControlsVisible}
      onClick={() => {
        if (isControlsVisible) return
        setTimerRunning(false)
        setControlsVisible(true)
      }}
    >
      {isControlsVisible && (
        <IconButton
          className={classes.backButton}
          color="inherit"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography
        className={classes.intervalTime}
        variant="h1"
        color={
          maxIntervalTime - intervalTime > 3
            ? 'textPrimary'
            : intervalType === IntervalType.Prepare
            ? 'primary'
            : 'secondary'
        }
      >
        {maxIntervalTime - intervalTime}
        <div className={classes.intervalProgress}>
          <CircularProgress
            className={classes.intervalProgressTrack}
            variant="determinate"
            color={
              intervalType === IntervalType.Prepare ? 'primary' : 'secondary'
            }
            size="100%"
            thickness={1.5}
            value={100}
          />
          <CircularProgress
            variant="static"
            color={
              intervalType === IntervalType.Prepare ? 'primary' : 'secondary'
            }
            size="100%"
            thickness={1.5}
            value={(100 * intervalTime) / maxIntervalTime}
          />
        </div>
      </Typography>
      <div className={classes.exercise}>
        <span className={classes.next}>
          {intervalType === IntervalType.Prepare && 'Next'}
        </span>
        <span className={classes.exerciseName}>{exercise.name}</span>
      </div>
      <AppBar
        className={clsx(classes.appBar, isControlsVisible && 'open')}
        position="fixed"
        color="inherit"
      >
        <LinearProgress
          className={classes.trainingProgress}
          variant="determinate"
          value={(100 * trainingTime) / maxTrainingTime}
        />
        <Toolbar className={classes.controlBar}>
          <IconButton
            color="inherit"
            disabled={
              exerciseId === 0 &&
              intervalType === IntervalType.Prepare &&
              intervalTime === 0
            }
            onClick={() => {
              if (intervalType === IntervalType.Prepare && intervalTime === 0) {
                setExerciseId(exerciseId - 1)
              } else {
                setIntervalType(IntervalType.Prepare)
                setIntervalTime(0)
              }
            }}
          >
            <SkipPreviousIcon />
          </IconButton>
          <Fab
            className={classes.noShadow}
            color="primary"
            onClick={() => {
              if (!isTimerRunning) {
                setControlsVisible(false)
              }
              setTimerRunning(!isTimerRunning)
            }}
          >
            {isTimerRunning ? <PauseIcon /> : <PlayArrowIcon />}
          </Fab>
          <IconButton
            color="inherit"
            disabled={exerciseId === exercises.length - 1}
            onClick={() => {
              setExerciseId(exerciseId + 1)
              setIntervalType(IntervalType.Prepare)
              setIntervalTime(0)
            }}
          >
            <SkipNextIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ButtonBase>
  )
}
