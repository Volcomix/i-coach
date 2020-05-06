import Container from '@material-ui/core/Container'
import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Exercises from './containers/Exercises'
import Training from './containers/Training'
import { ExercisesDispatch, IntervalsDispatch } from './reducers'
import itemsReducer from './reducers/items'

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
  return (
    <Router basename="/i-coach">
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <IntervalsDispatch.Provider value={intervalsDispatch}>
              <ExercisesDispatch.Provider value={exercisesDispatch}>
                <Training intervals={intervals} exercises={exercises} />
              </ExercisesDispatch.Provider>
            </IntervalsDispatch.Provider>
          </Route>
          <Route exact path="/exercises">
            <Exercises />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
