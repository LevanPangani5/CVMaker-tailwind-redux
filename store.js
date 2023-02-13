import { configureStore } from '@reduxjs/toolkit'
import startReducer from './slices/startSlice'
import educationReducer from './slices/educationSlice';
import experienceReducer from './slices/experienceSlice';
import personalInfoReducer from './slices/personalInfoSlice';
import personalInfoValidationReducer from './slices/validation/personalInfoValidationSlice'
import experienceValidationReducer from './slices/validation/experienceValidationSlice'
import educationValidationReducer from './slices/validation/educationValidationSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
  const reducer= combineReducers({
    cvlistener:startReducer,
    experiences:experienceReducer,
    education:educationReducer,
    personalInfo:personalInfoReducer,
    personalInfoValidation:personalInfoValidationReducer,
    experienceValidation:experienceValidationReducer,
    educationValidation:educationValidationReducer
  })
  const persisitedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer: persisitedReducer,
    middleware: [thunk]
  })

   
  export const persistor = persistStore(store) 