import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import { ExercisesState } from '../reducers'

export default function Exercises(props: Props) {
  return (
    <List>
      {props.exercises.ids.map((id) => {
        const exercise = props.exercises.byId[id]
        return (
          <ListItem key={id}>
            <ListItemText
              primary={exercise.name}
              secondary={exercise.description}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

interface Props {
  exercises: ExercisesState
}
