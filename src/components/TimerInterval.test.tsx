import { render, screen } from '@testing-library/react'
import React from 'react'
import TimerInterval, { Props } from './TimerInterval'

function setup(props: Partial<Props>) {
  return render(
    <TimerInterval
      intervalType="prepare"
      intervalCurrentTime={1}
      intervalDuration={2}
      {...props}
    />
  )
}

test('renders prepare timer when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(screen.getByRole('timer', { name: 'prepare' })).toBeInTheDocument()
})

test('renders work timer when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByRole('timer', { name: 'work' })).toBeInTheDocument()
})

test('renders interval remaining time', () => {
  setup({ intervalCurrentTime: 10, intervalDuration: 15 })
  expect(screen.getByRole('timer')).toHaveTextContent('5')
})
