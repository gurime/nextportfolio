'use client'
import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(new Date());

useEffect(() => {
const interval = setInterval(() => setTime(new Date()), 1000);
return () => clearInterval(interval);
}, []);

useEffect(() => {
const clock = document.getElementById('clock');
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

// Convert to 12-hour format
let hours12 = hours % 12;
if (hours12 === 0) {
hours12 = 12;
}

// Add leading zeros
hours12 = hours12 < 10 ? '0' + hours12 : hours12;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

clock.innerHTML = `${hours12}:${minutes}:${seconds}`;
}, [time]);

  return (
    <>
    <div id="clock"></div>
    </>
  )
}
