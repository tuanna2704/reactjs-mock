import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../component/counter/counter-slice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;