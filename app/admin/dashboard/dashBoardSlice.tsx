// app/prescriptions/prescriptionSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AdminDashBoardState {
  totalPatient: number;
  totalDoctor: number;
  loading: boolean;
  error: string | null;
}

const initialState: AdminDashBoardState = {
  totalPatient: 0,
  totalDoctor: 0,
  loading: false,
  error: null,
};

const URI = process.env.EXPO_PUBLIC_API_URL;

// Thunk to count patients
export const countPatient = createAsyncThunk(
  "dashboard/countPatient", // Unique action type
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/patient/count`);
      return response.data.count ?? response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch patient count"
      );
    }
  }
);

// Thunk to count doctors
export const countDoctor = createAsyncThunk(
  "dashboard/countDoctor", // Unique action type
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/doctor/count`);
      return response.data.count ?? response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch doctor count"
      );
    }
  }
);

const AdminDashBoardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Patient count cases
    builder
      .addCase(countPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.totalPatient = action.payload;
      })
      .addCase(countPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Doctor count cases
    builder
      .addCase(countDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.totalDoctor = action.payload;
      })
      .addCase(countDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default AdminDashBoardSlice.reducer;