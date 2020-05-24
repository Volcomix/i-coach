import { createContext, Dispatch } from 'react'
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
  category?: number
}

export interface Category extends Item {
  name: string
  description?: string
  difficulty: number
}

export type IntervalsState = ItemsState<Interval>
export type ExercisesState = ItemsState<Exercise>
export type CategoriesState = ItemsState<Category>

export const IntervalsDispatch = createContext<Dispatch<ItemsAction<Interval>>>(
  null!
)

export const ExercisesDispatch = createContext<Dispatch<ItemsAction<Exercise>>>(
  null!
)

export const CategoriesDispatch = createContext<
  Dispatch<ItemsAction<Category>>
>(null!)
