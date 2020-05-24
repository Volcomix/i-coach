import React from 'react'
import Form from '../components/Form'
import { ExercisesState, IntervalsState } from '../reducers'
import Interval from './Interval'

export default function Training(props: Props) {
  return (
    <Form>
      {props.intervals.ids.map((intervalId) => {
        return (
          <Interval
            key={intervalId}
            interval={props.intervals.byId[intervalId]}
            intervals={props.intervals}
            exercises={props.exercises}
          />
        )
      })}
    </Form>
  )
}

interface Props {
  intervals: IntervalsState
  exercises: ExercisesState
}
