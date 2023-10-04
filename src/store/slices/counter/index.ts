import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialState: CounterState = {
  currentNumber: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.currentNumber += 1;
    },
    decrement: state => {
      state.currentNumber -= 1;
    },
    incrementByAmount: (state, action) => {
      state.currentNumber += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
