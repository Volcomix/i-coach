import { render, screen } from '@testing-library/react'
import React from 'react'
import TimerIntervalTime, { Props } from './TimerIntervalTime'

function setup(props: Partial<Props>) {
  return render(
    <TimerIntervalTime
      intervalType="prepare"
      intervalCurrentTime={1}
      intervalDuration={2}
      timerLastStart={0}
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

test('notifies when interval is about to end', () => {
  setup({ intervalCurrentTime: 7, intervalDuration: 10 })
  expect(screen.getByRole('timer')).toHaveAttribute('aria-live', 'assertive')
})

test('does not notify when interval is not about to end', () => {
  setup({ intervalCurrentTime: 6, intervalDuration: 10 })
  expect(screen.getByRole('timer')).toHaveAttribute('aria-live', 'off')
})

test('notifies when restarting timer', () => {
  const { rerender } = render(
    <TimerIntervalTime
      intervalType="prepare"
      intervalCurrentTime={7}
      intervalDuration={10}
      timerLastStart={0}
    />
  )
  const remainingTimeBeforeRestart = screen.getByText('3')

  rerender(
    <TimerIntervalTime
      intervalType="prepare"
      intervalCurrentTime={7}
      intervalDuration={10}
      timerLastStart={1}
    />
  )
  const reminaingTimeAfterRestart = screen.getByText('3')

  expect(reminaingTimeAfterRestart).not.toBe(remainingTimeBeforeRestart)
})
