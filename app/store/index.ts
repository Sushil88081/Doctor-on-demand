import MedicineReducer  from './../ordermedicine/ordermedicneSlice';
import { Article } from "./../home/homeSlice";
import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../doctor/doctorSlice";
import patientReducer from "../../app/doctorpannel/patient/patientSlice";
import articleReducer from "../home/homeSlice";
import appointmentReducer from "../doctorDetails/doctorSlice";
import authReducer from "../auth/authSlice";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    patient: patientReducer,
    article: articleReducer,
    appointment:appointmentReducer,
    auth:authReducer,
    Medicine:MedicineReducer
  },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
