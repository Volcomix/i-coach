import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TimerControls, { Props } from './TimerControls'

const defaultProps: Props = {
  exerciseIndex: 1,
  exerciseCount: 3,
  trainingCurrentTime: 1,
  trainingDuration: 2,
  isTimerRunning: false,
  onPreviousClick: () => {},
  onPlayClick: () => {},
  onNextClick: () => {},
}

test('toolbar is open when timer is not running', () => {
  render(<TimerControls {...defaultProps} isTimerRunning={false} />)
  expect(screen.getByRole('toolbar')).toHaveClass('open')
})

test('toolbar is not open when timer is running', () => {
  render(<TimerControls {...defaultProps} isTimerRunning={true} />)
  expect(screen.getByRole('toolbar')).not.toHaveClass('open')
})

test('renders training progress', () => {
  render(
    <TimerControls
      {...defaultProps}
      trainingCurrentTime={200}
      trainingDuration={2000}
    />
  )
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '10')
})

test('previous button is disabled when current time is 0', () => {
  render(<TimerControls {...defaultProps} trainingCurrentTime={0} />)
  expect(screen.getByRole('button', { name: 'previous' })).toBeDisabled()
})

test('previous button is enabled when current time is not 0', () => {
  render(<TimerControls {...defaultProps} trainingCurrentTime={1} />)
  expect(screen.getByRole('button', { name: 'previous' })).toBeEnabled()
})

test('renders play button when timer is not running', () => {
  render(<TimerControls {...defaultProps} isTimerRunning={false} />)
  expect(screen.getByRole('button', { name: 'play' })).toBeInTheDocument()
})

test('renders pause button when timer is running', () => {
  render(<TimerControls {...defaultProps} isTimerRunning={true} />)
  expect(screen.getByRole('button', { name: 'pause' })).toBeInTheDocument()
})

test('next button is disabled when exercise is the last one', () => {
  render(
    <TimerControls {...defaultProps} exerciseIndex={2} exerciseCount={3} />
  )
  expect(screen.getByRole('button', { name: 'next' })).toBeDisabled()
})

test('next button is enabled when exercise is not the last one', () => {
  render(
    <TimerControls {...defaultProps} exerciseIndex={1} exerciseCount={3} />
  )
  expect(screen.getByRole('button', { name: 'next' })).toBeEnabled()
})

test('calls onPreviousClick on previous button click', () => {
  const onPreviousClick = jest.fn()
  render(<TimerControls {...defaultProps} onPreviousClick={onPreviousClick} />)
  fireEvent.click(screen.getByRole('button', { name: 'previous' }))
  expect(onPreviousClick).toHaveBeenCalled()
})

test('calls onPlayClick on play button click', () => {
  const onPlayClick = jest.fn()
  render(<TimerControls {...defaultProps} onPlayClick={onPlayClick} />)
  fireEvent.click(screen.getByRole('button', { name: 'play' }))
  expect(onPlayClick).toHaveBeenCalled()
})

test('calls onPlayClick on pause button click', () => {
  const onPlayClick = jest.fn()
  render(
    <TimerControls
      {...defaultProps}
      isTimerRunning={true}
      onPlayClick={onPlayClick}
    />
  )
  fireEvent.click(screen.getByRole('button', { name: 'pause' }))
  expect(onPlayClick).toHaveBeenCalled()
})

test('calls onNextClick on next button click', () => {
  const onNextClick = jest.fn()
  render(<TimerControls {...defaultProps} onNextClick={onNextClick} />)
  fireEvent.click(screen.getByRole('button', { name: 'next' }))
  expect(onNextClick).toHaveBeenCalled()
})
