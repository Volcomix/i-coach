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

test('renders prepare progress when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(screen.getByRole('presentation')).toHaveClass('prepare')
  expect(
    screen.getByRole('progressbar', { name: 'prepare' })
  ).toBeInTheDocument()
})

test('renders work progress when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByRole('presentation')).toHaveClass('work')
  expect(screen.getByRole('progressbar', { name: 'work' })).toBeInTheDocument()
})

test('renders progress value when timer is not running', () => {
  setup({ intervalCurrentTime: 2, intervalDuration: 10, isTimerRunning: false })
  const progress = screen.getByRole('progressbar')
  expect(progress).not.toHaveClass('running')
  expect(progress).toHaveAttribute('aria-valuenow', '20')
})

test('animates to next progress value when timer is running', () => {
  setup({ intervalCurrentTime: 2, intervalDuration: 10, isTimerRunning: true })
  const progress = screen.getByRole('progressbar')
  expect(progress).toHaveClass('running')
  expect(progress).toHaveAttribute('aria-valuenow', '30')
})
