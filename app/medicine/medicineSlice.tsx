// app/patients/patientSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URI = process.env.EXPO_PUBLIC_API_URL;

// 🔄 **Thunk to upload a prescription for Patient**
export const uploadPatientPrescription = createAsyncThunk(
  "patients/uploadPrescription",
  async (
    {
      file,
      patientId,
    }: { file: { uri: string; type: string; name: string }; patientId: string },
    { rejectWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: file.uri,
        type: file.type,
        name: file.name,
      } as any);

      // Perform POST request to upload prescription file
      const response = await axios.post(
        `${URI}/patients/${patientId}/prescriptions/upload`,
        formData,
        {
          headers: {
            // Axios will automatically set 'Content-Type' for FormData
          },
        }
      );

      return {
        patientId,
        pdf_path: response.data.path,
      };
    } catch (error: any) {
      // Enhanced error handling to ensure meaningful error messages
      const errorMessage = error?.response?.data?.message || "Failed to upload prescription";
      console.error("Upload Error: ", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Patient Slice for handling the state
interface PatientState {
  isLoading: boolean;
  error: string | null;
  uploadedPrescription: string | null;
}

const initialState: PatientState = {
  isLoading: false,
  error: null,
  uploadedPrescription: null,
};

// Create the slice for patient actions
const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadPatientPrescription.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(uploadPatientPrescription.fulfilled, (state, action: PayloadAction<{ patientId: string; pdf_path: string }>) => {
        state.isLoading = false;
        state.uploadedPrescription = action.payload.pdf_path;
      })
      .addCase(uploadPatientPrescription.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default patientSlice.reducer;
