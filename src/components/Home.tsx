import AppBar from '@material-ui/core/AppBar'
import Fab from '@material-ui/core/Fab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import TimerIcon from '@material-ui/icons/Timer'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    totalTime: {
      justifyContent: 'center',
      '& > *:not(:first-child)': {
        marginLeft: theme.spacing(2),
      },
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: '-50%',
      right: theme.spacing(2),
    },
  })
)

export default function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary="Soft Touch Front" />
          <ListItemSecondaryAction>
            <Typography variant="body2" color="textSecondary">
              01:20
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Soft Touch Side" />
          <ListItemSecondaryAction>
            <Typography variant="body2" color="textSecondary">
              01:20
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.totalTime}>
          <TimerIcon />
          <Typography>Total time</Typography>
          <Typography>18:40</Typography>
          <Fab color="secondary" className={classes.fabButton}>
            <PlayArrowIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
