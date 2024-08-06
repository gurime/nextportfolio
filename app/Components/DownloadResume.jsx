'use client'
import Link from 'next/link'
import { saveAs } from "file-saver";

export default function DownloadRseume() {
  const handleDownload = () => {
    saveAs(
      "/Resume.pdf",
      "Resume.pdf"
    );
  };
  return (
    <>
    <Link onClick={handleDownload} href="#!" 
className="hero-button" 
>Donwload Resume</Link>
    </>
  )
}
