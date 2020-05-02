import React from 'react'
import Form from '../components/Form'
import Time from '../components/Time'

export default function Training() {
  return (
    <Form>
      <Time label="Prepare" value={10} />
      <Time label="Wide Move" value={30} />
      <Time label="Break" value={10} />
      <Time label="Soft Touch Side" value={30} />
    </Form>
  )
}
