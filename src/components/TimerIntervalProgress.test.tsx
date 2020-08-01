import { render, screen } from '@testing-library/react'
import React from 'react'
import TimerIntervalProgress, { Props } from './TimerIntervalProgress'

function setup(props: Partial<Props>) {
  return render(<TimerIntervalProgress intervalType="prepare" {...props} />)
}

it('renders prepare progress when preparing', () => {
  setup({ intervalType: 'prepare' })
  expect(
    screen.getByRole('progressbar', { name: 'prepare' })
  ).toBeInTheDocument()
})

it('renders work progress when working', () => {
  setup({ intervalType: 'work' })
  expect(screen.getByRole('progressbar', { name: 'work' }))
})
