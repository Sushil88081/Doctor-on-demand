import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../doctor/doctorSlice";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
