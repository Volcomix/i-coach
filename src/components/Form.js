import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .MuiFab-root': {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
  },
}))

export default function Form(props) {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {props.children}
    </form>
  )
}
