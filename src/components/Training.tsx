import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import exercises from '../exercises'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    time: {
      textAlign: 'center',
      fontWeight: 500,
    },
    exercise: {
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
      <Typography className={classes.time} variant="h1">
        {exercise.prepareTime}
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
