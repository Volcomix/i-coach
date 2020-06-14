import Container from '@material-ui/core/Container'
import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Exercises from './containers/Exercises'
import Training from './containers/Training'
import exercises from './exercises'
import {
  CategoriesState,
  Exercise,
  ExercisesDispatch,
  ExercisesState,
  Interval,
  IntervalsDispatch,
  IntervalsState,
} from './reducers'
import itemsReducer, { ItemsReducer } from './reducers/items'

const initialIntervals: IntervalsState = {
  byId: {
    0: { id: 0, exerciseId: 0, time: 10 },
    1: { id: 1, exerciseId: 2, time: 30 },
    2: { id: 2, exerciseId: 1, time: 10 },
  },
  ids: [0, 1, 2],
  nextId: 3,
}

const initialExercises: ExercisesState = {
  byId: {
    0: { id: 0, icon: 'prepare', name: 'Prepare' },
    1: { id: 1, icon: 'break', name: 'Break' },
    2: { id: 2, icon: 'work', name: 'Work' },
  },
  ids: [0, 1, 2],
  nextId: 3,
}

const initialCategories: CategoriesState = {
  byId: {},
  ids: [],
  nextId: 0,
}

for (const category of exercises) {
  const categoryId = initialCategories.nextId
  initialCategories.byId[categoryId] = {
    id: categoryId,
    name: category.name,
    description: category.description,
    difficulty: category.difficulty,
  }
  initialCategories.ids.push(categoryId)
  initialCategories.nextId++

  for (const exercise of category.exercises) {
    const exerciseId = initialExercises.nextId
    initialExercises.byId[exerciseId] = {
      id: exerciseId,
      icon: 'work',
      name: exercise.name,
      description: (exercise as any).description,
      category: categoryId,
    }
    initialExercises.ids.push(exerciseId)
    initialExercises.nextId++
  }
}

export default function App() {
  const [intervals, intervalsDispatch] = useReducer<ItemsReducer<Interval>>(
    itemsReducer,
    initialIntervals
  )

  const [exercises, exercisesDispatch] = useReducer<ItemsReducer<Exercise>>(
    itemsReducer,
    initialExercises
  )

  // TODO
  // const [categories, categoriesDispatch] = useReducer<ItemsReducer<Category>>(
  //   itemsReducer,
  //   initialCategories
  // )

  return (
    <Router basename="/i-coach">
      <Container maxWidth="sm" disableGutters={true}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/training">
            <IntervalsDispatch.Provider value={intervalsDispatch}>
              <ExercisesDispatch.Provider value={exercisesDispatch}>
                <Training intervals={intervals} exercises={exercises} />
              </ExercisesDispatch.Provider>
            </IntervalsDispatch.Provider>
          </Route>
          <Route exact path="/exercises">
            <Exercises exercises={exercises} />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
