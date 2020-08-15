import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      position: 'absolute',
      '&[aria-label="prepare"], &.prepare': {
        color: theme.palette.text.secondary,
      },
    },
    track: {
      opacity: 0.1,
    },
    indicator: {
      '&.running .MuiCircularProgress-circle': {
        transitionDuration: '1s',
        transitionTimingFunction: 'linear',
      },
    },
  })
)

export default function TimerIntervalProgress(props: Props) {
  const classes = useStyles()

  const animatedIntervalCurrentTime =
    props.intervalCurrentTime + (props.isTimerRunning ? 1 : 0)

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
