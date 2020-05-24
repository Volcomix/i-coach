import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent, useContext, useState } from 'react'
import CreateExerciseDialog from '../components/CreateExerciseDialog'
import IntervalMenu from '../components/IntervalMenu'
import SelectExerciseDialog from '../components/SelectExerciseDialog'
import icons from '../icons'
import {
  Exercise,
  ExercisesDispatch,
  ExercisesState,
  Interval,
  IntervalsDispatch,
  IntervalsState,
} from '../reducers'
import { ItemsAction } from '../reducers/items'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    flex: 1,
  },
}))

export default function IntervalComponent(props: Props) {
  const exercise = props.exercises.byId[props.interval.exerciseId]

  const classes = useStyles()
  const intervalsDispatch = useContext(IntervalsDispatch)
  const exercisesDispatch = useContext(ExercisesDispatch)

  const [exerciseDialogConfig, setExerciseDialogConfig] = useState<
    ExerciseDialogConfig
  >({ type: null, isNewInterval: false, newIntervalPosition: null })

  const selectExerciseDialogOpen = exerciseDialogConfig.type === 'select'
  const createExerciseDialogOpen = exerciseDialogConfig.type === 'create'

  function handleIconClick() {
    setExerciseDialogConfig({
      type: 'select',
      isNewInterval: false,
      newIntervalPosition: null,
    })
  }

  function handleTimeChange(event: ChangeEvent<HTMLInputElement>) {
    intervalsDispatch({
      type: 'update',
      item: { ...props.interval, time: Number(event.target.value) },
    })
  }

  function handleAddBeforeClick() {
    setExerciseDialogConfig({
      type: 'select',
      isNewInterval: true,
      newIntervalPosition: 'before',
    })
  }

  function handleAddAfterClick() {
    setExerciseDialogConfig({
      type: 'select',
      isNewInterval: true,
      newIntervalPosition: 'after',
    })
  }

  function handleDeleteClick() {
    intervalsDispatch({ type: 'delete', item: props.interval })
  }

  function handleSelectExerciseDialogClose(exercise?: Exercise | 'create') {
    // TODO add a new handler instead of onClose to avoid 'create' string
    if (exercise === 'create') {
      setExerciseDialogConfig({ ...exerciseDialogConfig, type: 'create' })
      return
    }
    setExerciseDialogConfig({ ...exerciseDialogConfig, type: null })
    if (!exercise) {
      return
    }
    // TODO factorize duplicated code
    if (exerciseDialogConfig.isNewInterval) {
      // TODO avoid to clone an existing interval
      const interval = { ...props.interval }
      interval.id = props.intervals.nextId
      interval.exerciseId = exercise.id

      const action: ItemsAction<Interval> = {
        type: 'add',
        item: interval,
      }
      if (exerciseDialogConfig.newIntervalPosition) {
        action[exerciseDialogConfig.newIntervalPosition] = props.interval
      }
      intervalsDispatch(action)
    } else {
      intervalsDispatch({
        type: 'update',
        item: { ...props.interval, exerciseId: exercise.id },
      })
    }
  }

  function handleCreateExerciseDialogClose(exercise?: Exercise) {
    setExerciseDialogConfig({ ...exerciseDialogConfig, type: null })
    if (!exercise) {
      return
    }
    // TODO find a way to dispatch only one action?
    const exerciseId = props.exercises.nextId
    exercisesDispatch({ type: 'add', item: exercise })
    if (exerciseDialogConfig.isNewInterval) {
      // TODO avoid to clone an existing interval
      const interval = { ...props.interval }
      interval.id = props.intervals.nextId
      interval.exerciseId = exerciseId

      const action: ItemsAction<Interval> = {
        type: 'add',
        item: interval,
      }
      if (exerciseDialogConfig.newIntervalPosition) {
        action[exerciseDialogConfig.newIntervalPosition] = props.interval
      }
      intervalsDispatch(action)
    } else {
      intervalsDispatch({
        type: 'update',
        item: { ...props.interval, exerciseId },
      })
    }
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleIconClick}>{icons[exercise.icon]}</IconButton>
      <TextField
        label={exercise.name}
        type="number"
        className={classes.time}
        value={props.interval.time}
        onChange={handleTimeChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">sec</InputAdornment>,
        }}
      />
      <IntervalMenu
        onAddBeforeClick={handleAddBeforeClick}
        onAddAfterClick={handleAddAfterClick}
        onDeleteClick={handleDeleteClick}
      />

      <SelectExerciseDialog
        exercises={props.exercises}
        open={selectExerciseDialogOpen}
        onClose={handleSelectExerciseDialogClose}
      />
      <CreateExerciseDialog
        open={createExerciseDialogOpen}
        exercises={props.exercises}
        onClose={handleCreateExerciseDialogClose}
      />
    </div>
  )
}

interface Props {
  interval: Interval
  intervals: IntervalsState
  exercises: ExercisesState
}

interface ExerciseDialogConfig {
  type: null | 'select' | 'create'
  isNewInterval: boolean
  newIntervalPosition: null | 'before' | 'after'
}
