import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'
import { ExercisesDispatch } from '../reducers'

export default function CreateExercise() {
  const dispatch = useContext(ExercisesDispatch)
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleSaveClick() {
    dispatch({ type: 'add', item: { name, description } })
    history.goBack()
  }

  return (
    <Form>
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
