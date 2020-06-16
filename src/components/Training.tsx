import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import exercises from '../exercises'

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

  const [exerciseId] = useState(0)

  const exercise = exercises[exerciseId]

  return (
    <div className={classes.root}>
      <Typography className={classes.intervalTime} variant="h1">
        {exercise.prepareTime}
        <div className={classes.intervalProgress}>
          <CircularProgress
            variant="static"
            size="100%"
            thickness={1.5}
            value={50}
          />
        </div>
      </Typography>
      <div className={classes.exercise}>
        <Typography variant="h4" color="textSecondary">
          Next
        </Typography>
        <Typography className={classes.exerciseName} variant="h3">
          {exercise.name}
        </Typography>
      </div>
    </div>
  )
}
