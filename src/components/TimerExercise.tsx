import Grow from '@material-ui/core/Grow'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    next: {
      color: theme.palette.text.secondary,
    },
  })
)

export default function TimerExercise(props: Props) {
  const classes = useStyles()

  return (
    <Grow in={props.intervalType === 'prepare'}>
      <div className={classes.next}>Next</div>
    </Grow>
  )
}

export interface Props {
  intervalType: IntervalType
}
