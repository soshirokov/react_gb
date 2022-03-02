import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { chatReducer } from './chats/reducer';
import {profileReducer} from './profile/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer, 
    composeEnhancers(applyMiddleware(thunk))
);   

export const persistor = persistStore(store);