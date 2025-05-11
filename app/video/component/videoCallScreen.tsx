import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import SimplePeer from 'simple-peer';
import { useLocalSearchParams } from 'expo-router';
import io from 'socket.io-client';

const socket = io('http://192.168.1.9:5000'); // 👈 Change to your IP Address

const VideoCallScreen = () => {
  const [stream, setStream] = useState<any>(null);
  const [peer, setPeer] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const videoRef = useRef<any>(null);
  const remoteVideoRef = useRef<any>(null);
  const { userName, roomId, initiator } = useLocalSearchParams();
  
  console.log("username: ", userName);

  useEffect(() => {
    // Step 1: Get User Media
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      })
      .catch((err) => console.error('Failed to get media:', err));
    
    // Step 2: Join the Room
    socket.emit('join-room', roomId);
    
    // Step 3: Listen for Signaling Data
    socket.on('signal', (data) => {
      if (peer) {
        peer.signal(data);
      }
    });
  }, []);

  const startCall = () => {
    const peerInstance = new SimplePeer({
      initiator: initiator === 'true',
      stream: stream,
      trickle: false,
    });

    // Step 4: Send signaling data to socket
    peerInstance.on('signal', (data: any) => {
      console.log('SIGNAL DATA:', JSON.stringify(data));
      socket.emit('signal', { roomId, data });
    });

    // Step 5: When connected
    peerInstance.on('connect', () => {
      console.log('CONNECTED');
      setConnected(true);
    });

    // Step 6: Remote stream received
    peerInstance.on('stream', (remoteStream: any) => {
      console.log('REMOTE STREAM RECEIVED');
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });

    setPeer(peerInstance);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Video Call with {userName}</Text>
      <Button title="Start Call" onPress={startCall} />
      <video ref={videoRef} autoPlay style={{ width: 200, height: 200, marginBottom: 20 }} />
      <video ref={remoteVideoRef} autoPlay style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default VideoCallScreen;
