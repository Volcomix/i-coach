import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import React, { useState } from 'react'
import icons from '../icons'

export default function SelectExercise(props) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleMenuItemClick(event, exercise) {
    props.onChange(event, exercise)
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton onClick={handleMenuClick}>
        {icons[props.selectedExercise.icon]}
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {props.exercises.ids.map((exerciseId) => {
          const exercise = props.exercises.byId[exerciseId]
          return (
            <MenuItem
              key={exercise.id}
              selected={exercise.id === props.selectedExercise.id}
              onClick={(event) => handleMenuItemClick(event, exercise)}
            >
              <ListItemIcon>{icons[exercise.icon]}</ListItemIcon>
              <ListItemText primary={exercise.name} />
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
