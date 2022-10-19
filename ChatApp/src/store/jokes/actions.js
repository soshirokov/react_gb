export const GET_JOKES = "GET_JOKES";
export const JOKES_REQUEST = "JOKES_REQUEST";
export const JOKES_ERROR = "JOKES_ERROR";

export const getJokes = (jokes) => ({
  type: GET_JOKES,
  payload: jokes
});

export const jokesRequest = {
  type: JOKES_REQUEST
}

export const jokesError = (error) => ({
  type: JOKES_ERROR,
  payload: error
});

export const getJokesThunk = () => async (dispatch) => {
  dispatch(jokesRequest);
  
  try {
    const response = await fetch('http://api.icndb.com/jokes/random/10');

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    dispatch(getJokes(result.value));
  }
  catch(error) {
    dispatch(jokesError(error));
  }
}