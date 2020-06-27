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
    bottomAppBar: {
      top: 'auto',
      bottom: 0,
    },
    trainingDuration: {
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

  const trainingDuration = exercises.reduce(
    (result, exercise) =>
      result + exercise.prepareDuration + exercise.workDuration,
    0
  )

  return (
    <React.Fragment>
      <List className={classes.list}>
        {exercises.map((exercise, exerciseIndex) => {
          const time = exercise.prepareDuration + exercise.workDuration
          return (
            <ListItem key={exerciseIndex}>
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
      <AppBar className={classes.bottomAppBar} position="fixed" color="inherit">
        <Toolbar className={classes.trainingDuration}>
          <TimerIcon color="primary" />
          <Typography>Training duration</Typography>
          <Typography>{toDuration(trainingDuration)}</Typography>
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
