let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        result: action.payload,
        isFetching: false,
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state
  }
}


export const getRestult = state => state.random.result;
export const getIsFetching = state => state.random.isFetching;
