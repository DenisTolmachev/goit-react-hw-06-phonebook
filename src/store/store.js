import { configureStore } from '@reduxjs/toolkit';
import { SliceReducer } from './contacts/contacts';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: SliceReducer,
  },
});

export const persistor = persistStore(store);
