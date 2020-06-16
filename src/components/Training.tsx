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
    },
    intervalTime: {
      marginTop: -theme.spacing(12),
      width: '100vw',
      height: '100vw',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '40vw',
      fontWeight: 500,
    },
    intervalProgress: {
      position: 'absolute',
      top: theme.spacing(3),
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    },
    exercise: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      textAlign: 'center',
    },
    exerciseName: {
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
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
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
            variant="static"
            size="100%"
            thickness={1.5}
            value={(100 * time) / maxTime}
          />
        </div>
      </Typography>
      <div className={classes.exercise}>
        {intervalType === IntervalType.Prepare && (
          <Typography variant="h4" color="textSecondary">
            Next
          </Typography>
        )}
        <Typography className={classes.exerciseName} variant="h3">
          {exercise.name}
        </Typography>
      </div>
    </div>
  )
}
