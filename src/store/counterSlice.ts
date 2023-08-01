import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type CounterState = {
  value: number;
};
// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    update: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement, update, reset } = counterSlice.actions;
export default counterSlice.reducer;
