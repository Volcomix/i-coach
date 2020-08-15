import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      position: 'absolute',
      transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,

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
      '&.ending .MuiCircularProgress-circle': {
        transitionDuration: '300ms',
        transitionTimingFunction: theme.transitions.easing.easeInOut,
      },
    },
  })
)

function useIntervalEnding(
  isTimerRunning: boolean,
  intervalCurrentTime: number,
  intervalDuration: number
) {
  const [isIntervalEnding, setIntervalEnding] = useState(false)

  useEffect(() => {
    if (isTimerRunning && intervalCurrentTime === intervalDuration - 1) {
      const timer = setTimeout(() => {
        setIntervalEnding(true)
      }, 650)

      return () => {
        clearTimeout(timer)
      }
    } else {
      setIntervalEnding(false)
    }
  }, [intervalCurrentTime, intervalDuration, isTimerRunning])

  return isIntervalEnding
}

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
