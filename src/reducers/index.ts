import React from 'react'
import icons from '../icons'
import { Item, ItemsAction, ItemsState } from './items'

export interface Interval extends Item {
  exerciseId: number
  time: number
}

export interface Exercise extends Item {
  icon: keyof typeof icons
  name: string
  description?: string
}

export type IntervalsState = ItemsState<Interval>
export type ExercisesState = ItemsState<Exercise>

export const IntervalsDispatch = React.createContext<
  React.Dispatch<ItemsAction<Interval>>
>(null!)

export const ExercisesDispatch = React.createContext<
  React.Dispatch<ItemsAction<Exercise>>
>(null!)
