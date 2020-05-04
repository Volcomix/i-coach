export default function itemsReducer(state, action) {
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
          [state.nextId]: { id: state.nextId, ...action.item },
        },
        ids: [
          ...state.ids.slice(0, position),
          state.nextId,
          ...state.ids.slice(position),
        ],
        nextId: state.nextId + 1,
      }
    case 'update':
      return {
        ...state,
        byId: { ...state.byId, [action.item.id]: action.item },
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
