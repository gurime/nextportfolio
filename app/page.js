import React from 'react'
import Navbar from './Components/Navbar'
import Link from 'next/link';
import Clock from './Components/Clock';
import propic from '../public/img/pro-phil.jpeg'
import Footer from './Components/Footer';
import Image from 'next/image';
import DownloadResume from './Components/DownloadResume';
import CardList from './Components/CardList';




export default function Home() {



return (
<>
<Navbar/>
<div className="hero">
<h1 className="hero-title"><span>Welcome to My Website</span></h1>
<p className="hero-description">Learn more about me.</p>
<div style={{
display:'flex',
flexWrap:'wrap',
justifyContent:'center',
gap:'1pc'
}}>
<Link href="about" className="hero-button">Explore About</Link>
<DownloadResume/>
</div>

</div>
{/**hero */}

<h1 style={{textAlign:'center'}} className="hero-title"><span>Front-End Developer <br/> UX/UI Designer</span></h1>



{/**profile pic */}
<div className="profilepic-box">
<h1 className="main-clock" id="clock"><Clock/></h1>
<Image height={300} width={300} src={propic} alt="..."/>
</div>
{/**profile pic */}





<div className='Mywork-Title'><h1>My Work</h1></div>
<CardList/>
<Footer/>
</>
)
}
