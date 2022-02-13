import {ADD_MESSAGE, ADD_CHAT, DELETE_CHAT} from './actions';

const initialState = {};
  
export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        return {
             ...state, 
             [action.payload.chatId]: {...state[action.payload.chatId], 
                messages: [...state[action.payload.chatId].messages || [], {
                    id: (state[action.payload.chatId].messages || 0) + 1,
                    author: action.payload.author,
                    text: action.payload.message,
                    data: (new Date()).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    })
                }]}
        }
        case ADD_CHAT:
        const chatCount = Object.keys(state).length;
        return {
            ...state, 
            ['chat_'+(chatCount + 1)]: {
                name: 'Chat ' + (chatCount + 1),
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