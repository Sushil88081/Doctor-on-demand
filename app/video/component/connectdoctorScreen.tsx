import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { startVideoCall } from '@/app/services/api';


const ConnectDoctorScreen = () => {
  const [name, setName] = useState('');
  const [doctorId, setDoctorId] = useState('D123'); // Doctor ID hardcoded for now

  const startCall = async () => {
    if (name.trim()) {
      try {
        const roomId = await startVideoCall(doctorId, name);
        router.push({
          pathname: '/video/component/videoCallScreen',
          params: { roomId },
        });
      } catch (error) {
        console.error("Error in starting the call: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍⚕️ Connect with Doctor</Text>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={startCall}>
        <Text style={styles.buttonText}>Start Video Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectDoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0af',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
