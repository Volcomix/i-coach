import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useContext } from 'react'
import SelectExercise from '../components/SelectExercise'
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
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}
