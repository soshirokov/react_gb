import {createStore, combineReducers} from 'redux';
import { chatReducer } from './chats/reducer';
import {profileReducer} from './profile/reducer';

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer
});

export const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );   