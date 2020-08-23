import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { IntervalType } from '../types'
import useIntervalEnding from './useIntervalEnding'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      width: '100% !important',
      height: 'auto !important',
      padding: theme.spacing(2),
      transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,

      '& .MuiCircularProgress-circle': {
        strokeWidth: 1.5,
      },
      '&[aria-label="prepare"], &.prepare': {
        color: theme.palette.text.secondary,
      },
    },
    track: {
      opacity: 0.1,
    },
    indicator: {
      position: 'absolute',

      '&.running .MuiCircularProgress-circle': {
        transitionDuration: '1s',
        transitionTimingFunction: 'linear',
      },
      '&.ending .MuiCircularProgress-circle': {
        transitionDuration: '300ms',
        transitionTimingFunction: theme.transitions.easing.easeInOut,
      },
    },
  })
)

export default function TimerIntervalProgress(props: Props) {
  const classes = useStyles()
  const isIntervalEnding = useIntervalEnding(
    props.isTimerRunning,
    props.intervalCurrentTime,
    props.intervalDuration
  )

  const animatedIntervalCurrentTime = isIntervalEnding
    ? 0
    : props.intervalCurrentTime + (props.isTimerRunning ? 1 : 0)

  return (
    <React.Fragment>
      <CircularProgress
        role="presentation"
        className={clsx(classes.progress, classes.track, props.intervalType)}
        variant="determinate"
        value={100}
      />
      <CircularProgress
        aria-label={props.intervalType}
        className={clsx(classes.progress, classes.indicator, {
          running: props.isTimerRunning,
          ending: isIntervalEnding,
        })}
        variant="static"
        value={(animatedIntervalCurrentTime * 100) / props.intervalDuration}
      />
    </React.Fragment>
  )
}

export interface Props {
  intervalType: IntervalType
  intervalCurrentTime: number
  intervalDuration: number
  isTimerRunning: boolean
}
