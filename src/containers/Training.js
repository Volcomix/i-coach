import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Form from '../components/Form'
import Interval from '../components/Interval'

export default function Training(props) {
  return (
    <Form>
      {props.intervals.ids.map((intervalId) => {
        const interval = props.intervals.byId[intervalId]
        const exercise = props.exercises.byId[interval.exerciseId]
        return (
          <Interval key={interval.id} interval={interval} exercise={exercise} />
        )
      })}
      <Fab component={RouterLink} to="/exercises/create">
        <AddIcon />
      </Fab>
    </Form>
  )
}
