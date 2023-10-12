'use client'
import React from 'react'
import githutimg from '../../public/img/GitHub-Mark-Light-64px.png'
import linkedin from '../../public/img/linkedin-icon.png'
import Image from 'next/image';
export default function Footer() {
const gitHubhandleClick = () => {
window.open('https://github.com/gurime', '_blank');
};
const linkedinhandleClick = () => {
window.open('https://www.linkedin.com/in/ogphillip-bailey/', '_blank');
};
return (
<>
<footer>
<div className="footer-container">
<div className="social-links-box">
<p>&#169; Created by Phillip Andrew Bailey</p>
<div style={{marginRight:'1rem',display:'flex'}}>
<Image height={24} width={24} src={linkedin} onClick={linkedinhandleClick}   alt=""/>
<div style={{padding: '0 5px'}}></div>
<Image height={24} width={24} onClick={gitHubhandleClick} src={githutimg} alt=""/>
</div>
</div>
</div>
</footer>
</>
)
}
