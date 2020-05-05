import Avatar from '@material-ui/core/Avatar'
import { blue } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import icons from '../icons'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
})

export default function ExerciseDialog(props) {
  const classes = useStyles()

  function handleClose() {
    props.onClose()
  }

  function handleListItemClick(value) {
    props.onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Exercise</DialogTitle>
      <List>
        {props.exercises.ids.map((exerciseId) => {
          const exercise = props.exercises.byId[exerciseId]
          return (
            <ListItem
              key={exercise.id}
              button
              onClick={() => handleListItemClick(exercise)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {icons[exercise.icon]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={exercise.name} />
            </ListItem>
          )
        })}
        <ListItem autoFocus button onClick={handleClose}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add exercise" />
        </ListItem>
      </List>
    </Dialog>
  )
}
