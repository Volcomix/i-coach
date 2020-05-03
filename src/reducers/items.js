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
    default:
      return state
  }
}
