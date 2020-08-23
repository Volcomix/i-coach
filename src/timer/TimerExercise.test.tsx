import { act, render, screen } from '@testing-library/react'
import React from 'react'
import TimerExercise, { Props } from './TimerExercise'

jest.useFakeTimers()

function setup(props: Partial<Props>) {
  return render(
    <TimerExercise
      intervalType="prepare"
      exerciseIndex={1}
      exerciseName="Do nothing"
      {...props}
    />
  )
}

test('renders "Next" when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(screen.getByText('Next')).toBeVisible()
})

test('does not render "Next" when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByText('Next')).not.toBeVisible()
})

test('renders exercise name', () => {
  setup({ exerciseName: 'Do something' })
  expect(screen.getByText('Do something')).toBeInTheDocument()
})

test('does not animate when starting to work', () => {
  const { rerender } = render(
    <TimerExercise
      intervalType="prepare"
      exerciseIndex={0}
      exerciseName="Do nothing"
    />
  )
  const exerciseNameBeforeChange = screen.getByText('Do nothing')

  rerender(
    <TimerExercise
      intervalType="work"
      exerciseIndex={0}
      exerciseName="Do nothing"
    />
  )
  act(() => {
    jest.runAllTimers()
  })
  const exerciseNameAfterChange = screen.getByText('Do nothing')

  expect(exerciseNameAfterChange).toBe(exerciseNameBeforeChange)
})

test('animates when moving to the next exercise', () => {
  const { rerender } = render(
    <TimerExercise
      intervalType="work"
      exerciseIndex={0}
      exerciseName="Do nothing"
    />
  )
  const exerciseNameBeforeChange = screen.getByText('Do nothing')

  rerender(
    <TimerExercise
      intervalType="prepare"
      exerciseIndex={1}
      exerciseName="Do something"
    />
  )
  act(() => {
    jest.runAllTimers()
  })
  const exerciseNameAfterChange = screen.getByText('Do something')
  const alert = screen.getByRole('alert')

  expect(alert).toHaveClass('slide-left')
  expect(exerciseNameAfterChange).not.toBe(exerciseNameBeforeChange)
})

test('animates when moving to the previous exercise', () => {
  const { rerender } = render(
    <TimerExercise
      intervalType="work"
      exerciseIndex={1}
      exerciseName="Do nothing"
    />
  )
  const exerciseNameBeforeChange = screen.getByText('Do nothing')

  rerender(
    <TimerExercise
      intervalType="prepare"
      exerciseIndex={0}
      exerciseName="Do something"
    />
  )
  act(() => {
    jest.runAllTimers()
  })
  const exerciseNameAfterChange = screen.getByText('Do something')
  const alert = screen.getByRole('alert')

  expect(alert).toHaveClass('slide-right')
  expect(exerciseNameAfterChange).not.toBe(exerciseNameBeforeChange)
})
