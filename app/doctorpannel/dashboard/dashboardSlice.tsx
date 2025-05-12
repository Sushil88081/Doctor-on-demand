// app/prescriptions/prescriptionSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface DashBoardState {
  totalAppointments: number;  // Changed from TotlAppointment to totalAppointments
  loading: boolean;
  error: string | null;
}

const initialState: DashBoardState = {
  totalAppointments: 0,  // Initialize to 0 instead of Prescription
  loading: false,
  error: null,
};

const URI = process.env.EXPO_PUBLIC_API_URL;

// 🔄 Thunk to count appointments
export const countAppointments = createAsyncThunk(
    "appointments/count",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${URI}/appointment/count`);
        console.log("API Response Data:", response.data); // Log raw response
        return response.data.count ?? response.data; // Fallback if .count is undefined
      } catch (error) {
        console.error("API Error:", error.response?.data);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch count");
      }
    }
  );

const DashBoardSlice = createSlice({
  name: "dashboard",  // Changed from "Dashboard" to be more specific
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Count appointments
    builder
      .addCase(countAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.totalAppointments = action.payload;
      })
      .addCase(countAppointments.rejected, (state, action) => {
        state.loading = false;
        
      });

    // You can keep your other cases (fetchPrescriptions, createPrescription, etc.) here
    // but make sure they're properly defined and imported
  },
});

export default DashBoardSlice.reducer;