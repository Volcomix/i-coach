export interface Item {
  id: number
}

export interface ItemsState<T extends Item> {
  byId: { [id: number]: T }
  ids: number[]
  nextId: number
}

export type ItemsAction<T extends Item> =
  | { type: 'add'; item: T; before?: Position; after?: Position }
  | { type: 'update'; item: T }
  | { type: 'delete'; item: T }

interface Position {
  id: number
}

export type ItemsReducer<T extends Item> = (
  state: ItemsState<T>,
  action: ItemsAction<T>
) => ItemsState<T>

export default function reducer<T extends Item>(
  state: ItemsState<T>,
  action: ItemsAction<T>
): ItemsState<T> {
  switch (action.type) {
    case 'add':
      const position = action.before
        ? state.ids.indexOf(action.before.id)
        : action.after
        ? state.ids.indexOf(action.after.id) + 1
        : state.ids.length
      return {
        byId: {
          ...state.byId,
          [action.item.id]: action.item,
        },
        ids: [
          ...state.ids.slice(0, position),
          action.item.id,
          ...state.ids.slice(position),
        ],
        nextId: state.nextId + 1,
      }
    case 'update':
      return {
        byId: { ...state.byId, [action.item.id]: action.item },
        ids: state.ids,
        nextId: state.nextId,
      }
    case 'delete':
      const { [action.item.id]: _, ...byId } = state.byId
      const ids = state.ids.filter((id) => id !== action.item.id)
      return {
        byId,
        ids,
        nextId: state.nextId,
      }
    default:
      return state
  }
}
