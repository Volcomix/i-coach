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
import { Link as RouterLink } from 'react-router-dom'
import exercises from '../exercises'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginBottom: theme.spacing(9),
    },
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
    startButton: {
      position: 'absolute',
      zIndex: 1,
      top: '-50%',
      right: theme.spacing(2),
    },
  })
)

export default function Home() {
  const classes = useStyles()

  const totalTime = exercises.reduce(
    (result, exercise) => result + exercise.prepareTime + exercise.workTime,
    0
  )

  return (
    <React.Fragment>
      <List className={classes.list}>
        {exercises.map((exercise, index) => {
          const time = exercise.prepareTime + exercise.workTime
          return (
            <ListItem key={index}>
              <ListItemText primary={exercise.name} />
              <ListItemSecondaryAction>
                <Typography variant="body2" color="textSecondary">
                  {toDuration(time)}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Toolbar className={classes.totalTime}>
          <TimerIcon color="primary" />
          <Typography>Total time</Typography>
          <Typography>{toDuration(totalTime)}</Typography>
          <Fab
            className={classes.startButton}
            color="primary"
            component={RouterLink}
            to="/training"
          >
            <PlayArrowIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

function toDuration(totalSeconds: number): string {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}
