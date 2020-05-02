import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'

export default function CreateInterval() {
  let history = useHistory()

  return (
    <Form submitIcon={<SaveIcon />} onSubmit={() => history.goBack()}>
      <TextField label="Name" />
      <TextField label="Description" />
    </Form>
  )
}
