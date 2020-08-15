import Grow from '@material-ui/core/Grow'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    next: {
      color: theme.palette.text.secondary,
    },
    exerciseName: {
      fontWeight: 500,
    },
  })
)

export default function TimerExercise(props: Props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grow in={props.intervalType === 'prepare'}>
        <div className={classes.next}>Next</div>
      </Grow>
      <span className={classes.exerciseName}>{props.exerciseName}</span>
    </React.Fragment>
  )
}

export interface Props {
  intervalType: IntervalType
  exerciseName: string
}
