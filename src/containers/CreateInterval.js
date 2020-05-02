import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import Form from '../components/Form'

const useStyles = makeStyles((theme) => ({
  button: {
    alignSelf: 'flex-end',
  },
}))

export default function CreateInterval() {
  const classes = useStyles()

  return (
    <Form>
      <TextField label="Name" />
      <TextField label="Description" />
      <Button className={classes.button} variant="contained" color="primary">
        Save
      </Button>
    </Form>
  )
}
