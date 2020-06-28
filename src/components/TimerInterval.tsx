import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      fontWeight: 500,
      transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,

      '&[aria-label="prepare"]': {
        color: theme.palette.text.secondary,
      },
      '&[aria-label="work"]': {
        color: theme.palette.text.primary,
      },
    },
  })
)

export default function TimerInterval(props: Props) {
  const classes = useStyles()

  return (
    <Typography
      role="timer"
      aria-label={props.intervalType}
      className={classes.timer}
    >
      {props.intervalDuration - props.intervalCurrentTime}
    </Typography>
  )
}

export interface Props {
  intervalType: IntervalType
  intervalCurrentTime: number
  intervalDuration: number
}
