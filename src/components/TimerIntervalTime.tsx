import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 500,
      transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,

      '&[aria-label="prepare"]': {
        color: theme.palette.text.secondary,
      },
      '&[aria-label="work"]': {
        color: theme.palette.text.primary,
      },
      '&[aria-live="assertive"] > *': {
        animation: `$pulsate 500ms ${theme.transitions.easing.easeInOut}`,
      },
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)',
      },
      '25%': {
        transform: 'scale(1.5)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  })
)

export default function TimerIntervalTime(props: Props) {
  const classes = useStyles()

  const intervalRemainingTime =
    props.intervalDuration - props.intervalCurrentTime

  return (
    <div
      role="timer"
      aria-label={props.intervalType}
      aria-live={intervalRemainingTime <= 3 ? 'assertive' : 'off'}
      className={classes.root}
    >
      <Typography key={props.intervalCurrentTime}>
        {intervalRemainingTime}
      </Typography>
    </div>
  )
}

export interface Props {
  intervalType: IntervalType
  intervalCurrentTime: number
  intervalDuration: number
}
