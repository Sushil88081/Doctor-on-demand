import { Article } from "./../home/homeSlice";
import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../doctor/doctorSlice";
import patientReducer from "../../app/doctorpannel/patient/patientSlice";
import articleReducer from "../home/homeSlice";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    patient: patientReducer,
    article: articleReducer,
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
