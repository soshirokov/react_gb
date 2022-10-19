import { request_statuses } from '../../utils/request_statuses';

export const selectJokes = (state) => state.jokes.data;
export const selectJokesError = (state) => state.jokes.error.message;
export const selectJokesOnRequest = (state) => state.jokes.status === request_statuses.onRequest;