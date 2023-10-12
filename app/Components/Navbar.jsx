import Link from 'next/link'
import React from 'react'

export default function Navbar() {

return (
<>
<nav>
<div className="logo">
<Link href='/'>PB.</Link></div>
<ul>
<li><Link href="/" >Home</Link></li>
<li><Link href="about" >About</Link></li>
<li><Link href="contact" >Contact</Link></li>
<li><Link href="password" >PasswordGenerator</Link></li>
</ul>
</nav>
</>
)
}
