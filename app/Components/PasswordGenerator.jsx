'use client'
import React, { useState } from 'react'




export default function PasswordGenerator() {
const [password, setPassword] = useState('');
const [passwordLength, setPasswordLength] = useState(16);

function generatePassword() {
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_=+'/|[]<>{}~`;:.,-?";

let newPassword = " ";

for (let i = 0; i < Math.min(passwordLength, 25); i++) { 
const char = chars.charAt(Math.floor(Math.random() * chars.length));
newPassword += char;
}
setPassword(newPassword);
}
return (
<>


<h1 className='password-title'>Password Generator</h1>

<div className='passcontainer'>
<h3  style={{color:"white"}}>Enter the desired length of the password:</h3>
<p style={{color:"white"}}>Max Length: 25</p>

<input
type="text"
value={passwordLength}
onChange={event => setPasswordLength(event.target.value)}
maxLength="16"
style={{
width:'70px',
padding:'4px',
margin:'auto',
textAlign:'center',
borderRadius:'4px',
border:'solid 1px #ccc',
outline:'none'
}}
/>

<br />
<br />

<button className='passwordbtn' onClick={generatePassword}>Generate Password</button>

<br />
<br />

<p style={{color:'white'}}>Generated password:</p>
<p className="passwordgen"><span>{password}</span></p>

</div>

</>
)
}
