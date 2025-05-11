import axios from 'axios';

const API_URL = 'http://192.168.1.9:5000/api/video';  // Tumhara backend URL

export const startVideoCall = async (doctorId: string, patientId: string) => {
  try {
    const response = await axios.post(`${API_URL}/start-video-call`, {
      doctorId,
      patientId,
    });
    return response.data.roomId;
  } catch (error) {
    console.error('Error starting video call:', error);
    throw error;
  }
};
