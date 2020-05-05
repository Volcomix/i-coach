import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useContext, useState } from 'react'
import ExerciseDialog from '../components/ExerciseDialog'
import IntervalMenu from '../components/IntervalMenu'
import icons from '../icons'
import { IntervalsDispatch } from '../reducers'

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
  const dispatch = useContext(IntervalsDispatch)
  const [exerciseDialogConfig, setExerciseDialogConfig] = useState(null)
  const exerciseDialogOpen = Boolean(exerciseDialogConfig)

  function handleIconClick() {
    setExerciseDialogConfig({ isNewInterval: false, newIntervalPosition: null })
  }

  function handleTimeChange(event) {
    dispatch({
      type: 'update',
      item: { ...props.interval, time: event.target.value },
    })
  }

  function handleAddBeforeClick() {
    setExerciseDialogConfig({
      isNewInterval: true,
      newIntervalPosition: 'before',
    })
  }

  function handleAddAfterClick() {
    setExerciseDialogConfig({
      isNewInterval: true,
      newIntervalPosition: 'after',
    })
  }

  function handleDeleteClick() {
    dispatch({ type: 'delete', item: props.interval })
  }

  function handleExerciseDialogClose(exercise) {
    setExerciseDialogConfig(null)
    if (!exercise) {
      return
    }
    if (exerciseDialogConfig.isNewInterval) {
      const { id, ...interval } = props.interval
      interval.exerciseId = exercise.id
      dispatch({
        type: 'add',
        item: interval,
        [exerciseDialogConfig.newIntervalPosition]: props.interval,
      })
    } else {
      dispatch({
        type: 'update',
        item: { ...props.interval, exerciseId: exercise.id },
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

      <ExerciseDialog
        exercises={props.exercises}
        selectedExercise={props.exercise}
        open={exerciseDialogOpen}
        onClose={handleExerciseDialogClose}
      />
    </div>
  )
}
