'use client'
import Link from 'next/link'
import React from 'react'

export default function DownloadRseume() {
    function downloadResume() {
        const element = document.createElement("a");
        element.href = "./Resume.pdf"; 
        element.download = "Resume"; 
        document.body.appendChild(element);
        element.click();
        }
  return (
    <>
    <Link href="#!" 
className="hero-button" 
onClick={downloadResume}>Donwload Resume</Link>
    </>
  )
}
