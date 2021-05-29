import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducers from "./reducers/index";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)