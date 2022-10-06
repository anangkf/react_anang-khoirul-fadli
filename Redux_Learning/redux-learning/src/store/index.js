import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducers from '../store/features'

export default configureStore({
    reducer:rootReducers,
    middleware: [thunk]
})