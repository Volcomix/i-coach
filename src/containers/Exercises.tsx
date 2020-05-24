import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'

const exercises = [
  {
    name: 'Wide Move',
    description:
      'Move the puck wide, side to side, shift weight, loose bottom hand',
  },
  {
    name: 'Soft Touch Side',
    description:
      'Quick puck touches on the forehand side. Focus on an active top hand',
  },
  {
    name: 'Soft Touch Front',
    description: 'Quick puck touches in front, roll top hand to control puck',
  },
  {
    name: 'Soft Touch Backhand',
    description:
      'Quick puck touches on the backhand, top hand does most of the work',
  },
  {
    name: 'Soft Touch Around',
    description: 'Quick puck touches while moving the puck around the body',
  },
  {
    name: 'Slide Bottom Hand',
    description:
      'Stickhandling with the top hand, while sliding the bottom hand up and down',
  },
  {
    name: 'Roll Puck Side',
    description:
      'Spin the puck by moving the blade around it (You can reverse directions)',
  },
  {
    name: 'Roll Puck Front',
    description:
      'Spin the puck by moving the blade around it (You can reverse directions)',
  },
]

export default function Exercises() {
  return (
    <List>
      {exercises.map(({ name, description }, id) => (
        <ListItem key={id}>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      ))}
    </List>
  )
}
