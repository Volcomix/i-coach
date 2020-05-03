export default function itemsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        byId: {
          ...state.byId,
          [state.nextId]: { id: state.nextId, ...action.item },
        },
        ids: [...state.ids, state.nextId],
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
        ...state,
        byId,
        ids,
      }
    default:
      return state
  }
}
