import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useContext, useState } from 'react'
import CreateExerciseDialog from '../components/CreateExerciseDialog'
import IntervalMenu from '../components/IntervalMenu'
import SelectExerciseDialog from '../components/SelectExerciseDialog'
import icons from '../icons'
import { ExercisesDispatch, IntervalsDispatch } from '../reducers'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    flex: 1,
  },
}))

export default function Interval(props) {
  const classes = useStyles()
  const intervalsDispatch = useContext(IntervalsDispatch)
  const exercisesDispatch = useContext(ExercisesDispatch)
  const [exerciseDialogConfig, setExerciseDialogConfig] = useState(null)
  const selectExerciseDialogOpen = Boolean(
    exerciseDialogConfig && exerciseDialogConfig.type === 'select'
  )
  const createExerciseDialogOpen = Boolean(
    exerciseDialogConfig && exerciseDialogConfig.type === 'create'
  )

  function handleIconClick() {
    setExerciseDialogConfig({
      type: 'select',
      isNewInterval: false,
      newIntervalPosition: null,
    })
  }

  function handleTimeChange(event) {
    intervalsDispatch({
      type: 'update',
      item: { ...props.interval, time: event.target.value },
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

  function handleSelectExerciseDialogClose(exercise) {
    // TODO add a new handler instead of onClose to avoid 'create' string
    if (exercise === 'create') {
      setExerciseDialogConfig({ ...exerciseDialogConfig, type: 'create' })
      return
    }
    setExerciseDialogConfig(null)
    if (!exercise) {
      return
    }
    // TODO factorize duplicated code
    if (exerciseDialogConfig.isNewInterval) {
      const { id, ...interval } = props.interval
      interval.exerciseId = exercise.id
      intervalsDispatch({
        type: 'add',
        item: interval,
        [exerciseDialogConfig.newIntervalPosition]: props.interval,
      })
    } else {
      intervalsDispatch({
        type: 'update',
        item: { ...props.interval, exerciseId: exercise.id },
      })
    }
  }

  function handleCreateExerciseDialogClose(exercise) {
    setExerciseDialogConfig(null)
    if (!exercise) {
      return
    }
    // TODO find a way to dispatch only one action?
    const exerciseId = props.exercises.nextId
    exercisesDispatch({ type: 'add', item: exercise })
    if (exerciseDialogConfig.isNewInterval) {
      // TODO avoid to clone an existing interval
      const { id, ...interval } = props.interval
      interval.exerciseId = exerciseId
      intervalsDispatch({
        type: 'add',
        item: interval,
        [exerciseDialogConfig.newIntervalPosition]: props.interval,
      })
    } else {
      intervalsDispatch({
        type: 'update',
        item: { ...props.interval, exerciseId },
      })
    }
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleIconClick}>
        {icons[props.exercise.icon]}
      </IconButton>
      <TextField
        label={props.exercise.name}
        type="number"
        className={classes.time}
        value={props.interval.time}
        onChange={handleTimeChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">sec</InputAdornment>,
        }}
      />
      <IntervalMenu
        interval={props.interval}
        onAddBeforeClick={handleAddBeforeClick}
        onAddAfterClick={handleAddAfterClick}
        onDeleteClick={handleDeleteClick}
      />

      <SelectExerciseDialog
        exercises={props.exercises}
        selectedExercise={props.exercise}
        open={selectExerciseDialogOpen}
        onClose={handleSelectExerciseDialogClose}
      />
      <CreateExerciseDialog
        open={createExerciseDialogOpen}
        onClose={handleCreateExerciseDialogClose}
      />
    </div>
  )
}
