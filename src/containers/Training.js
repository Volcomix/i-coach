import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Form from '../components/Form'
import Time from '../components/Time'
import { IntervalsDispatch } from '../reducers'

export default function Training(props) {
  const dispatch = useContext(IntervalsDispatch)
  return (
    <Form>
      {props.intervals.ids.map((intervalId) => {
        const interval = props.intervals.byId[intervalId]
        const exercise = props.exercises.byId[interval.exerciseId]
        return (
          <Time
            key={interval.id}
            label={exercise.name}
            value={interval.time}
            onChange={(event) =>
              dispatch({
                type: 'update',
                item: { ...interval, time: event.target.value },
              })
            }
          />
        )
      })}
      <Fab component={RouterLink} to="/exercises/create">
        <AddIcon />
      </Fab>
    </Form>
  )
}
