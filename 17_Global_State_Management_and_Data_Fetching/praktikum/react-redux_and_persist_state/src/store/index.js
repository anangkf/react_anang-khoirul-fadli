import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // save to localStorage for web
import todosReducer from './features/todos/todosSlice'
import modalReducer from './features/modal/modalSlice'
import sidebarReducer from './features/sidebar/sidebarSlice'

const rootReducer = combineReducers({
    todos: todosReducer,
    modal: modalReducer,
    sidebar: sidebarReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
