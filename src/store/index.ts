import { configureStore } from '@reduxjs/toolkit';
import listReducer from './slices/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
