'use client'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import locatorimg from '../../public/img/locator-icon.png'
import envimg from '../../public/img/env.png'
import phonepic from '../../public/img/portfolio_phone.png'
import Image from 'next/image'
import TicTacToe from '../Components/TicTacToe'
export default function page() {
    const [isAnswer1Visible, setAnswer1Visibility] = useState(false);
const [isAnswer2Visible, setAnswer2Visibility] = useState(false);
const [isAnswer3Visible, setAnswer3Visibility] = useState(false);
  return (
<>
<Navbar/>
<div className="container">
<h1 className="faq-title" >Contact Information</h1>
{/**first question block */}
<div className="question">
<h2>Contact Number</h2>
<button
id="question1"
className="question-button"
onClick={() => setAnswer1Visibility(!isAnswer1Visible)}>
<span className="plus-symbol">+</span>
</button>
<div className="answer" style={{ display: isAnswer1Visible ? 'block' : 'none' }}>
<p><Image height={60} width={15}  src={phonepic} alt='...'/> 423-208-8573</p>
</div>
</div>
{/**first question block */}


{/**second question block */}
<div className="question">
<h2>Address</h2>
<button
id="question2"
className="question-button"
onClick={() => setAnswer2Visibility(!isAnswer2Visible)}>
<span className="plus-symbol">+</span>
</button>

<div className="answer" style={{ display: isAnswer2Visible ? 'block' : 'none' }}>
<p className='locatorp'>
<Image height={24} width={24} src={locatorimg} alt='...'/> LaFayette GA, 30728
</p>
</div>
</div>
{/**second question block */}


{/**third question block */}
<div className="question">
<h2>Email Address</h2>
<button
id="question2"
className="question-button"
onClick={() => setAnswer3Visibility(!isAnswer3Visible)}>

<span className="plus-symbol">+</span>
</button>
<div className="answer" style={{ display: isAnswer3Visible ? 'block' : 'none' }}>
<p className='locatorp'>
<Image height={24} width={30} src={envimg} alt='...'/> ztron500@gmail.com
</p>
</div>
</div>
{/**third question block */}
</div>




<div className="container">
<h1 style={{textAlign:'center'}} className="faq-title" >Tic-Tac-Toe</h1>        
<TicTacToe/>
</div>
<Footer/>
</>
)
}
