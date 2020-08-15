import { render } from '@testing-library/react'
import React from 'react'
import TimerExercise from './TimerExercise'

test('renders without crashing', () => {
  render(<TimerExercise />)
})
