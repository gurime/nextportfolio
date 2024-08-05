'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
setIsOpen(!isOpen);
};

useEffect(() => {
const body = document.body;
if (isOpen) {
body.style.overflow = 'hidden';
} else {
body.style.overflow = 'visible';
}
    
return () => {
body.style.overflow = 'visible';
};
}, [isOpen]);
    
return (
<>
<nav  className={isOpen ? 'nav-open' : ''}>
<div className='small-nav'>
<div className="burger" onClick={toggleMenu}>
{isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
</div>

<div className="logo">
<Link href='/'>PB.</Link>
</div> 
</div>

<ul className='navlinks'>
<li><Link href="/" onClick={toggleMenu}>Home</Link></li>
<li><Link href="/about" onClick={toggleMenu}>About</Link></li>
<li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
<li><Link href="/password" onClick={toggleMenu}>Password Generator</Link></li>
<li><Link href="/shortener" onClick={toggleMenu}>Url Shortener</Link></li>
</ul>

{isOpen && <div className="overlay" onClick={toggleMenu}></div>}
</nav>
</>
)
}
