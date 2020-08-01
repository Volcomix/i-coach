import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    indicator: {
      '&[aria-label="prepare"]': {
        color: theme.palette.text.secondary,
      },
      '&[aria-label="work"]': {
        color: theme.palette.primary.main,
      },
    },
  })
)

export default function TimerIntervalProgress(props: Props) {
  const classes = useStyles()

  return (
    <CircularProgress
      className={classes.indicator}
      aria-label={props.intervalType}
    />
  )
}

export interface Props {
  intervalType: IntervalType
}
