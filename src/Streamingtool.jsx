import React, { useState, useRef } from 'react';
import './Stream.css'; 
import Navigation from '../src/component/Navigation/Navigation';

const Streamingtool = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const startStreaming = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const stopStreaming = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
      videoRef.current.srcObject = null;
    }
  };

  return (
    <>
    <Navigation/>
    <div className="streaming-tool-container">
      <div className="button-container">
        <button onClick={startStreaming}>Stream Now!</button>
        <button onClick={stopStreaming}>Stop</button>
      </div>
      <div className="video-container">
        <video ref={videoRef} className="video-element" autoPlay muted></video>
      </div>
    </div>
    </>
  );
};

export default Streamingtool;
