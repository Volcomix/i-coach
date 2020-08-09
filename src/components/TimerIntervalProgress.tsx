import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& [aria-label="prepare"], & .prepare': {
        color: theme.palette.text.secondary,
      },
    },
    track: {
      opacity: 0.1,
    },
  })
)

export default function TimerIntervalProgress(props: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress
        role="presentation"
        className={clsx(classes.track, props.intervalType)}
        variant="determinate"
        value={100}
      />
      <CircularProgress
        aria-label={props.intervalType}
        variant="static"
        value={50}
      />
    </div>
  )
}

export interface Props {
  intervalType: IntervalType
}
