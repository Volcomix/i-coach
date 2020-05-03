import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useContext } from 'react'
import SelectExercise from '../components/SelectExercise'
import { IntervalsDispatch } from '../reducers'
import IntervalMenu from './IntervalMenu'

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

  return (
    <div className={classes.root}>
      <SelectExercise
        exercises={props.exercises}
        selectedExercise={props.exercise}
        onChange={(_event, exercise) =>
          dispatch({
            type: 'update',
            item: { ...props.interval, exerciseId: exercise.id },
          })
        }
      />
      <TextField
        label={props.exercise.name}
        type="number"
        className={classes.time}
        value={props.interval.time}
        onChange={(event) =>
          dispatch({
            type: 'update',
            item: { ...props.interval, time: event.target.value },
          })
        }
        InputProps={{
          endAdornment: <InputAdornment position="end">sec</InputAdornment>,
        }}
      />
      <IntervalMenu interval={props.interval} />
    </div>
  )
}
