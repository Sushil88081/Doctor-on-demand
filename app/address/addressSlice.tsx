// app/prescriptions/prescriptionSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Address {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  home: string;
  full_address: string;
  apartment: string;
  landmark: string;
  city: string;
  state: string;
  pin: string;             // Changed from number to string
  phone: string;           // Changed from number to string
}

interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
};

const URI = process.env.EXPO_PUBLIC_API_URL;

// Fetch addresses
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URI}/address`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ?? "Failed to fetch addresses"
      );
    }
  }
);

// Create new address
export const createAddress = createAsyncThunk(
  "addresses/create",
  async (newAddress: Omit<Address, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URI}/address`, newAddress); // Fixed the path
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ?? "Failed to create address"
      );
    }
  }
);

// Update address
export const updateAddress = createAsyncThunk(
  "addresses/update",
  async (updatedAddress: Address, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${URI}/addresses/${updatedAddress.id}`,
        updatedAddress
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ?? "Failed to update address"
      );
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all addresses
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Create new address
    builder
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload);
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Update address
    builder
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.addresses.findIndex(
          (a) => a.id === action.payload.id
        );
        if (index !== -1) {
          state.addresses[index] = action.payload;
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default addressSlice.reducer;
