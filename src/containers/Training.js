import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Form from '../components/Form'
import Time from '../components/Time'

export default function Training() {
  return (
    <Form>
      <Time label="Prepare" value={10} />
      <Time label="Work" value={30} />
      <Time label="Break" value={10} />
      <Fab component={RouterLink} to="/intervals/create">
        <AddIcon />
      </Fab>
    </Form>
  )
}
