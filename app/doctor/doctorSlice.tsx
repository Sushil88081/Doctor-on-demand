import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "doctorList",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
