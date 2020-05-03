import Container from '@material-ui/core/Container'
import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateExercise from './containers/CreateExercise'
import Exercises from './containers/Exercises'
import Training from './containers/Training'
import { ExercisesDispatch, IntervalsDispatch } from './reducers'
import itemsReducer from './reducers/items'

function useCombineDispatch(exercises, exercisesDispatch, intervalsDispatch) {
  return function (action) {
    exercisesDispatch(action)
    switch (action.type) {
      case 'add':
        intervalsDispatch({
          type: 'add',
          item: { exerciseId: exercises.nextId, time: '' },
        })
        break
      default:
    }
  }
}

export default function App() {
  const [intervals, intervalsDispatch] = useReducer(itemsReducer, {
    byId: {
      0: { id: 0, exerciseId: 0, time: 10 },
      1: { id: 1, exerciseId: 2, time: 30 },
      2: { id: 2, exerciseId: 1, time: 10 },
    },
    ids: [0, 1, 2],
    nextId: 3,
  })
  const [exercises, exercisesDispatch] = useReducer(itemsReducer, {
    byId: {
      0: { id: 0, icon: 'prepare', name: 'Prepare' },
      1: { id: 1, icon: 'break', name: 'Break' },
      2: { id: 2, icon: 'work', name: 'Work' },
    },
    ids: [0, 1, 2],
    nextId: 3,
  })
  const combinedDispatch = useCombineDispatch(
    exercises,
    exercisesDispatch,
    intervalsDispatch
  )
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <IntervalsDispatch.Provider value={intervalsDispatch}>
              <Training intervals={intervals} exercises={exercises} />
            </IntervalsDispatch.Provider>
          </Route>
          <Route exact path="/exercises">
            <Exercises />
          </Route>
          <Route path="/exercises/create">
            <ExercisesDispatch.Provider value={combinedDispatch}>
              <CreateExercise />
            </ExercisesDispatch.Provider>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
