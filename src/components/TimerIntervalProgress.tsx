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
    // TODO Animate progress indicator
  })
)

export default function TimerIntervalProgress(props: Props) {
  const classes = useStyles()

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
        className={classes.progress}
        variant="static"
        value={
          ((props.intervalCurrentTime + (props.isTimerRunning ? 1 : 0)) * 100) /
          props.intervalDuration
        }
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
