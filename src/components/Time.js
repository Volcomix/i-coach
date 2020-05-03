import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import React from 'react'

export default function Time(props) {
  return (
    <TextField
      label={props.label}
      type="number"
      value={props.value}
      onChange={props.onChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">sec</InputAdornment>,
      }}
    />
  )
}
