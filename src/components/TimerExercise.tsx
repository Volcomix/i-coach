import Grow from '@material-ui/core/Grow'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import SwitchTransition from 'react-transition-group/SwitchTransition'
import { IntervalType } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '&.slide-left': {
        '--exit-translate-x': '-200px',
        '--enter-translate-x': '200px',
      },
      '&.slide-right': {
        '--exit-translate-x': '200px',
        '--enter-translate-x': '-200px',
      },
    },
    next: {
      color: theme.palette.text.secondary,
    },
    exerciseName: {
      fontWeight: 500,

      '&.appear, &.enter': {
        opacity: 0,
        transform: 'translateX(var(--enter-translate-x))',
      },
      '&.appear-active, &.enter-active': {
        opacity: 1,
        transform: 'none',
        transition: `opacity 100ms linear, transform 100ms ${theme.transitions.easing.easeOut}`,
      },
      '&.exit': {
        opacity: 1,
        transform: 'none',
      },
      '&.exit-active': {
        opacity: 0,
        transform: 'translateX(var(--exit-translate-x))',
        transition: `opacity 100ms linear, transform 100ms ${theme.transitions.easing.easeIn}`,
      },
    },
  })
)

function useSlideDirection(exerciseIndex: number) {
  const previousExerciseIndexRef = useRef(-1)
  const previousSlideDirectionRef = useRef<'left' | 'right'>('left')

  useEffect(() => {
    previousExerciseIndexRef.current = exerciseIndex
  }, [exerciseIndex])

  if (exerciseIndex > previousExerciseIndexRef.current) {
    previousSlideDirectionRef.current = 'left'
  } else if (exerciseIndex < previousExerciseIndexRef.current) {
    previousSlideDirectionRef.current = 'right'
  }
  return previousSlideDirectionRef.current
}

export default function TimerExercise(props: Props) {
  const classes = useStyles()
  const slideDirection = useSlideDirection(props.exerciseIndex)

  return (
    <div role="alert" className={clsx(classes.root, `slide-${slideDirection}`)}>
      <Grow in={props.intervalType === 'prepare'}>
        <div className={classes.next}>Next</div>
      </Grow>
      <SwitchTransition>
        <CSSTransition key={props.exerciseIndex} timeout={100} appear>
          <span className={classes.exerciseName}>{props.exerciseName}</span>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export interface Props {
  intervalType: IntervalType
  exerciseIndex: number
  exerciseName: string
}
