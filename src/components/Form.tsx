import { makeStyles } from '@material-ui/core/styles'
import React, { ReactNode } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    '& > *, & > .MuiFormControl-root': {
      marginTop: theme.spacing(2),
    },
    '& .MuiFab-root': {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
  },
}))

export default function Form(props: Props) {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {props.children}
    </form>
  )
}

interface Props {
  children: ReactNode
}
