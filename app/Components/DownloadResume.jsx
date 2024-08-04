'use client'
import Link from 'next/link'
import { saveAs } from "file-saver";

export default function DownloadRseume() {
  const handleDownload = () => {
    saveAs(
      "/Resume.docx",
      "Resume.docx"
    );
  };
  return (
    <>
    <Link href="#!" 
className="hero-button" 
>Donwload Resume</Link>
    </>
  )
}
