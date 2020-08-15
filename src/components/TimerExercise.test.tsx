import { render, screen } from '@testing-library/react'
import React from 'react'
import TimerExercise, { Props } from './TimerExercise'

function setup(props: Partial<Props>) {
  return render(<TimerExercise intervalType="prepare" {...props} />)
}

test('renders "Next" when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(screen.getByText('Next')).toBeVisible()
})

test('does not render "Next" when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByText('Next')).not.toBeVisible()
})
