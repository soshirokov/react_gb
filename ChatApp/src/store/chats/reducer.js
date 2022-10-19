import {ADD_MESSAGE, ADD_CHAT, DELETE_CHAT} from './actions';

const initialState = {};
  
export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        return {
             ...state, 
             [action.payload.chatId]: {...state[action.payload.chatId], 
                messages: [...state[action.payload.chatId].messages || [], {
                    id: action.payload.id,
                    author: action.payload.author,
                    text: action.payload.text,
                    date: action.payload.date
                }]}
        }
        case ADD_CHAT:
        return {
            ...state, 
            [action.payload.id]: {
                name: action.payload.name,
                messages: []
            }
        } 
        case DELETE_CHAT:
        const newState = {...state};
        delete newState[action.payload];
        return newState;
        default:
        return state
    }
}