import { getJokes, getJokesThunk, GET_JOKES, jokesError, JOKES_ERROR } from '../actions';

describe('Jokes actions tests', () => {
    it('getJokes action creator return true action', () => {
        const payload = {};
        const expected = {
            type: GET_JOKES,
            payload: payload
        };

        const result = getJokes(payload);

        expect(result).toEqual(expected);
    });

    it('jokesError action creator return true action', () => {
        const payload = {};
        const expected = {
            type: JOKES_ERROR,
            payload: payload
        };

        const result = jokesError(payload);

        expect(result).toEqual(expected);
    });

    it('getJokesThunk dispatch error when fetch fail', async () => {
        const mockDispatch = jest.fn();
        const error = new Error ("some fetch error");

        fetchMock.mockRejectOnce(error);

        await getJokesThunk()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(jokesError(error));
    });

    it('getJokesThunk dispatch success when fetch success', async () => {
        const mockDispatch = jest.fn();
        const result = {value: 'test'};
       
        fetchMock.mockResponseOnce(JSON.stringify(result));

        await getJokesThunk()(mockDispatch);
        
        expect(mockDispatch).toHaveBeenLastCalledWith(getJokes(result.value));
    });
});