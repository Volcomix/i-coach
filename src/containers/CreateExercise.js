import Fab from '@material-ui/core/Fab'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'
import icons from '../icons'
import { ExercisesDispatch } from '../reducers'

const useStyles = makeStyles(() => ({
  icon: {
    alignSelf: 'flex-start',
    minWidth: 80,
  },
}))

export default function CreateExercise() {
  const classes = useStyles()
  const dispatch = useContext(ExercisesDispatch)
  const history = useHistory()
  const [icon, setIcon] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleSaveClick() {
    dispatch({ type: 'add', item: { icon, name, description } })
    history.goBack()
  }

  return (
    <Form>
      <TextField
        select
        label="Icon"
        className={classes.icon}
        value={icon}
        onChange={(event) => setIcon(event.target.value)}
      >
        {Object.entries(icons).map(([id, icon]) => (
          <MenuItem key={id} value={id}>
            {icon}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Fab onClick={handleSaveClick}>
        <SaveIcon />
      </Fab>
    </Form>
  )
}
