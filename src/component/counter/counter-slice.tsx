import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCounter } from '../../redux/thunk';

export interface CounterState {
  value: number,
  loading: string,
}

const initialState: CounterState = {
  value: 0,
  loading: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
     builder
       .addCase(getCounter.pending, (state) => {
        state.loading = "pending"
       })
       .addCase(getCounter.fulfilled, (state, action) => {
        state.loading = "success"
         state.value = action.payload.value;
       });
   }
 
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer