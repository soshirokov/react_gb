import {ADD_MESSAGE, ADD_CHAT, DELETE_CHAT} from './actions';

const initialState = {};
  
export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        return {
             ...state, 
             [action.payload.chatId]: {...state[action.payload.chatId], 
                messages: [...state[action.payload.chatId].messages || [], {
                    id: (state[action.payload.chatId].messages.length || 0) + 1,
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
        const newChatId = Date.now().toString().slice(-4);
        return {
            ...state, 
            ['chat_'+newChatId]: {
                name: 'Chat ' + newChatId,
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