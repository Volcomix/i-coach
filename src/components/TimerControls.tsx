import AppBar from '@material-ui/core/AppBar'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: -theme.spacing(9),
      transition: `bottom ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      '&.open': {
        bottom: 0,
      },
    },
    trainingProgress: {
      height: theme.spacing(1),
    },
    controls: {
      minHeight: theme.spacing(9),
      justifyContent: 'center',
    },
    playButton: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.paper,
      boxShadow: theme.shadows[0],
      '&:hover': {
        backgroundColor: lighten(
          theme.palette.text.primary,
          theme.palette.action.hoverOpacity
        ),
      },
    },
  })
)

export function TimerControls(props: Props) {
  const classes = useStyles()

  return (
    <AppBar
      className={clsx(classes.root, !props.isTimerRunning && 'open')}
      position="fixed"
      color="inherit"
    >
      <LinearProgress
        className={classes.trainingProgress}
        variant="determinate"
        value={(100 * props.trainingCurrentTime) / props.trainingDuration}
      />
      <Toolbar className={classes.controls}>
        <IconButton
          color="inherit"
          disabled={props.trainingCurrentTime === 0}
          onClick={props.onPreviousClick}
        >
          <SkipPreviousIcon />
        </IconButton>
        <Fab className={classes.playButton} onClick={props.onPlayClick}>
          {props.isTimerRunning ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
        <IconButton
          color="inherit"
          disabled={props.exerciseIndex === props.exerciseCount - 1}
          onClick={props.onNextClick}
        >
          <SkipNextIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

interface Props {
  exerciseIndex: number
  exerciseCount: number
  trainingCurrentTime: number
  trainingDuration: number
  isTimerRunning: boolean
  onPreviousClick: () => void
  onPlayClick: () => void
  onNextClick: () => void
}
