'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { RiseLoader } from 'react-spinners'
export default function SpeedTest() {
    const [downloadSpeed, setDownloadSpeed] = useState(null)
  const [uploadSpeed, setUploadSpeed] = useState(null)
  const [latency, setLatency] = useState(null)
  const [testing, setTesting] = useState(false)

  const runSpeedTest = async () => {
    setTesting(true);
  
    // Simulate real-world download speed
    const startDownload = Date.now();
    const downloadResponse = await axios.get('/api/speedtest');
    const endDownload = Date.now();
    const downloadDuration = (endDownload - startDownload) / 1000; // in seconds
  
    const downloadSizeMB = downloadResponse.data.data.length / (1024 * 1024); // Convert bytes to MB
    const actualDownloadSpeedMbps = (downloadSizeMB * 8) / downloadDuration; // in Mbps
  
    setDownloadSpeed(actualDownloadSpeedMbps.toFixed(2));
  
    // Simulate real-world upload speed
    const uploadData = 'A'.repeat(1024 * 1024); // 1MB of data
    const startUpload = Date.now();
    await axios.post('/api/speedtest', { data: uploadData });
    const endUpload = Date.now();
    const uploadDuration = (endUpload - startUpload) / 1000; // in seconds
  
    const actualUploadSpeedMbps = (uploadData.length * 8) / (1024 * 1024) / uploadDuration; // in Mbps
  
    setUploadSpeed(actualUploadSpeedMbps.toFixed(2));
  
    // Simulate real-world latency
    const latencyPacket = 'A'.repeat(64); // Small packet for latency measurement
    const startLatency = Date.now();
    await axios.post('/api/speedtest', { data: latencyPacket });
    const endLatency = Date.now();
    const latencyDuration = (endLatency - startLatency); // in ms
  
    setLatency(latencyDuration.toFixed(2));
  
    // Store results
    await axios.post('/api/speedtest', {
      downloadSpeed: actualDownloadSpeedMbps,
      uploadSpeed: actualUploadSpeedMbps,
      latency: latencyDuration,
    });
  
    setTesting(false);
  };
  
return (
<>
<h1 className='password-title'>Speed Test</h1>
<div style={{ 
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'center',
 height: '70svh',
 width: '100%'
}}>
  <button 
    onClick={runSpeedTest} 
    disabled={testing}
    style={{ 
      backgroundColor: testing ? '#1d4ed8' : '#3b82f6', 
      color: 'white', 
      padding: '8px 16px', 
      borderRadius: '8px', 
      cursor: testing ? 'default' : 'pointer',
      opacity: testing ? 0.7 : 1,
    }}
  >
    {testing ? <RiseLoader color='#fff'/> : 'Start Speed Test'}
  </button>
  {downloadSpeed && (
    <p style={{ marginTop: '16px', color: '#fff' }}>
      Download Speed: {downloadSpeed} Mbps
    </p>
  )}
  {uploadSpeed && (
    <p style={{ color: '#fff' }}>
      Upload Speed: {uploadSpeed} Mbps
    </p>
  )}
  {latency && (
    <p style={{ color: '#fff' }}>
      Latency: {latency} ms
    </p>
  )}
</div>

</>
)
}
