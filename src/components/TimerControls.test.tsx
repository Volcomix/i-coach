import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TimerControls, { Props } from './TimerControls'

function setup(props: Partial<Props>) {
  return render(
    <TimerControls
      exerciseIndex={1}
      exerciseCount={3}
      trainingCurrentTime={1}
      trainingDuration={2}
      isTimerRunning={false}
      onPreviousClick={() => {}}
      onPlayClick={() => {}}
      onNextClick={() => {}}
      {...props}
    />
  )
}

test('toolbar is open when timer is not running', () => {
  setup({ isTimerRunning: false })
  expect(screen.getByRole('toolbar')).toHaveClass('open')
})

test('toolbar is not open when timer is running', () => {
  setup({ isTimerRunning: true })
  expect(screen.getByRole('toolbar')).not.toHaveClass('open')
})

test('renders training progress', () => {
  setup({ trainingCurrentTime: 200, trainingDuration: 2000 })
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '10')
})

test('previous button is disabled when current time is 0', () => {
  setup({ trainingCurrentTime: 0 })
  expect(screen.getByRole('button', { name: 'previous' })).toBeDisabled()
})

test('previous button is enabled when current time is not 0', () => {
  setup({ trainingCurrentTime: 1 })
  expect(screen.getByRole('button', { name: 'previous' })).toBeEnabled()
})

test('renders play button when timer is not running', () => {
  setup({ isTimerRunning: false })
  expect(screen.getByRole('button', { name: 'play' })).toBeInTheDocument()
})

test('renders pause button when timer is running', () => {
  setup({ isTimerRunning: true })
  expect(screen.getByRole('button', { name: 'pause' })).toBeInTheDocument()
})

test('next button is disabled when exercise is the last one', () => {
  setup({ exerciseIndex: 2, exerciseCount: 3 })
  expect(screen.getByRole('button', { name: 'next' })).toBeDisabled()
})

test('next button is enabled when exercise is not the last one', () => {
  setup({ exerciseIndex: 1, exerciseCount: 3 })
  expect(screen.getByRole('button', { name: 'next' })).toBeEnabled()
})

test('calls onPreviousClick on previous button click', () => {
  const onPreviousClick = jest.fn()
  setup({ onPreviousClick })
  fireEvent.click(screen.getByRole('button', { name: 'previous' }))
  expect(onPreviousClick).toHaveBeenCalled()
})

test('calls onPlayClick on play button click', () => {
  const onPlayClick = jest.fn()
  setup({ onPlayClick })
  fireEvent.click(screen.getByRole('button', { name: 'play' }))
  expect(onPlayClick).toHaveBeenCalled()
})

test('calls onPlayClick on pause button click', () => {
  const onPlayClick = jest.fn()
  setup({ isTimerRunning: true, onPlayClick })
  fireEvent.click(screen.getByRole('button', { name: 'pause' }))
  expect(onPlayClick).toHaveBeenCalled()
})

test('calls onNextClick on next button click', () => {
  const onNextClick = jest.fn()
  setup({ onNextClick })
  fireEvent.click(screen.getByRole('button', { name: 'next' }))
  expect(onNextClick).toHaveBeenCalled()
})
