import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React, { useContext, useState } from 'react'
import { IntervalsDispatch } from '../reducers'

export default function IntervalMenu(props) {
  const dispatch = useContext(IntervalsDispatch)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleClickDelete() {
    dispatch({ type: 'delete', item: props.interval })
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItem onClick={handleClickDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete interval" />
        </MenuItem>
      </Menu>
    </div>
  )
}
