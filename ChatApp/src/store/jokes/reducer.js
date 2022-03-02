import {GET_JOKES, JOKES_ERROR, JOKES_REQUEST} from './actions';
import { request_statuses } from '../../utils/request_statuses.js';

const initialState = {
    data: [],
    status: request_statuses.onInit,
    error: false
};
  
export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES:
        return {...state, 
            data: action.payload,
            status: request_statuses.onResult
        }
        case JOKES_REQUEST:
        return {...state, 
            status: request_statuses.onRequest
        }
        case JOKES_ERROR:
        return {...state, 
            status: request_statuses.onError,
            error: action.payload
        }
        default:
            return state
    }
}