import { render, screen } from '@testing-library/react'
import React from 'react'
import TimerIntervalProgress, { Props } from './TimerIntervalProgress'

function setup(props: Partial<Props>) {
  return render(
    <TimerIntervalProgress
      intervalType="prepare"
      intervalCurrentTime={1}
      intervalDuration={2}
      isTimerRunning={false}
      {...props}
    />
  )
}

it('renders prepare progress indicator when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(
    screen.getByRole('progressbar', { name: 'prepare' })
  ).toBeInTheDocument()
})

it('renders work progress indicator when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByRole('progressbar', { name: 'work' }))
})

it('renders prepare progress track when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(screen.getByRole('presentation')).toHaveClass('prepare')
})

it('renders work progress track when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByRole('presentation')).toHaveClass('work')
})

it('renders progress value when timer is not running', () => {
  setup({ intervalCurrentTime: 2, intervalDuration: 10, isTimerRunning: false })
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '20')
})

it('animates to next progress value when timer is running', () => {
  setup({ intervalCurrentTime: 2, intervalDuration: 10, isTimerRunning: true })
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '30')
})
