let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        result: action.payload
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}


export const getRestult = state => state.random.result
