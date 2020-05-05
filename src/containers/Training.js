import React from 'react'
import Form from '../components/Form'
import Interval from './Interval'

export default function Training(props) {
  return (
    <Form>
      {props.intervals.ids.map((intervalId) => {
        const interval = props.intervals.byId[intervalId]
        const exercise = props.exercises.byId[interval.exerciseId]
        return (
          <Interval
            key={interval.id}
            interval={interval}
            exercise={exercise}
            exercises={props.exercises}
          />
        )
      })}
    </Form>
  )
}
