import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
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
    intervalProgressTrack: {
      position: 'absolute',
      opacity: 0.1,
    },
    intervalProgress: {
      position: 'absolute',
      top: theme.spacing(3),
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      left: theme.spacing(3),
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
  })
)

export default function Training() {
  const classes = useStyles()

  const [exerciseId, setExerciseId] = useState(0)
  const [intervalType, setIntervalType] = useState(IntervalType.Prepare)
  const [time, setTime] = useState(0)

  const exercise = exercises[exerciseId]

  const maxTime =
    intervalType === IntervalType.Prepare
      ? exercise.prepareTime
      : exercise.workTime

  useEffect(() => {
    let wakeLock: any = null

    async function requestWakeLock() {
      if ('wakeLock' in navigator) {
        try {
          wakeLock = await (navigator as any).wakeLock.request('screen')
        } catch (error) {
          console.error(`${error.name}, ${error.message}`)
        }
      } else {
        console.warn('Wake lock API is not supported')
      }
    }

    requestWakeLock()

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
      if (wakeLock !== null) {
        wakeLock.release()
        wakeLock = null
      }
    }
  }, [])

  useEffect(() => {
    if (time === maxTime) {
      if (intervalType === IntervalType.Prepare) {
        setIntervalType(IntervalType.Work)
      } else {
        setExerciseId(exerciseId + 1)
        setIntervalType(IntervalType.Prepare)
      }
      setTime(0)
    }
  }, [exerciseId, intervalType, time, maxTime])

  return (
    <div className={classes.root}>
      <Typography className={classes.intervalTime} variant="h1">
        {maxTime - time}
        <div className={classes.intervalProgress}>
          <CircularProgress
            className={classes.intervalProgressTrack}
            variant="determinate"
            size="100%"
            thickness={1.5}
            value={100}
          />
          <CircularProgress
            variant="static"
            size="100%"
            thickness={1.5}
            value={(100 * time) / maxTime}
          />
        </div>
      </Typography>
      <div className={classes.exercise}>
        <span className={classes.next}>
          {intervalType === IntervalType.Prepare && 'Next'}
        </span>
        <span className={classes.exerciseName}>{exercise.name}</span>
      </div>
    </div>
  )
}
