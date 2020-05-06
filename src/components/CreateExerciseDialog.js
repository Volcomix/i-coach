import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from 'react'
import icons from '../icons'
import Form from './Form'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconField: {
    alignSelf: 'flex-start',
    minWidth: 80,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function CreateExerciseDialog(props) {
  const classes = useStyles()
  const [icon, setIcon] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleIconChange(event) {
    setIcon(event.target.value)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleSaveClick() {
    props.onClose({ icon, name, description })
  }

  function handleClose() {
    props.onClose()
  }

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            New exercise
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSaveClick}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        {/* TODO remove useless Form component */}
        <Form>
          <TextField
            select
            label="Icon"
            className={classes.iconField}
            value={icon}
            onChange={handleIconChange}
          >
            {Object.entries(icons).map(([id, icon]) => (
              <MenuItem key={id} value={id}>
                {icon}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Name" value={name} onChange={handleNameChange} />
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form>
      </Container>
    </Dialog>
  )
}
