import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import SpeedTest from '@/app/Components/SpeedTest'
import React from 'react'

export const metadata = {
    title: 'Phillip Bailey - Internet Speed Test',
    description: 'Test your internet speed with Phillip Bailey\'s Internet Speed Test tool. Quickly measure your download and upload speeds, latency, and connection quality. Ensure your network is performing optimally with this easy-to-use online speed test.',
    keywords: 'Internet Speed Test, Phillip Bailey, Speed Test, Network Performance, Download Speed, Upload Speed, Latency, Online Tool'
}


export default function page() {
return (
<>
<Navbar/>
<SpeedTest/>
<Footer/>
</>
)
}
