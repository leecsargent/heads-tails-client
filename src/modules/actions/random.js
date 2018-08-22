const url = process.env.REACT_APP_HEROKU_URL;

export const fetchRandom = (phoneNumbers) =>  {
  const data = {phoneNumbers};
  return dispatch => {
    dispatch(fetchRequest())
    return fetch(url.concat('/api/random'), {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
  }
}

export const fetchSuccess = (data) => {
  return {
    type: 'FETCH_SUCCESS',
    payload: data,
  }
}

export const fetchError = (error) => {
  return {
    type: 'FETCH_ERROR',
    error: error.error,
  }
}

export const fetchRequest = () => {
  return {
    type: 'FETCH_REQUEST',
  }
}
