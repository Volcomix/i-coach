import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'
import Time from '../components/Time'

export default function Training() {
  let history = useHistory()

  return (
    <Form
      submitIcon={<AddIcon />}
      onSubmit={() => history.push('/intervals/create')}
    >
      <Time label="Prepare" value={10} />
      <Time label="Work" value={30} />
      <Time label="Break" value={10} />
    </Form>
  )
}
