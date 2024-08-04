import React from 'react'
import Shortener from '../Components/Shortener'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
export const metadata = {
    title: 'Phillip Bailey - URL Shortener',
    description: 'Shorten your URLs with Phillip Bailey\'s URL Shortener. Easily create concise and shareable links for your websites and social media. Simplify your link management and enhance your online presence with this user-friendly tool.',
    keywords: 'URL Shortener, Phillip Bailey, Short Links, Link Management, URL Customization, Web Tool, Online Utility'
}

export default function page() {
return (
<>
<Navbar/>
<Shortener/>
<Footer/>
</>
)
}
