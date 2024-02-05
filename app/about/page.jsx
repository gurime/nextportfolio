
import React from 'react'
import Clock from '../Components/Clock'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export const metadata = {
 title: 'Phillip Bailey - About',
 description: "Explore the digital portfolio of Phillip Andrew Bailey, a skilled Front-End Developer and UX/UI designer from LaFayette, Georgia. With a background in IT/Web Design and degrees from Southern New Hampshire University, Phillip combines technical expertise with aesthetic sensibility. Discover a world where form meets function, showcasing projects in Angular, React JS, Next Js, and design tools like Affinity Designer, Affinity Photo, and Figma. Let\'s bring your ideas to life! #WebDesign #FrontEndDevelopment #UXUI #DigitalCreativity"
 ,

 keywords: 'Phillip Bailey, Front-End Developer, UX/UI designer, LaFayette, Georgia, IT, Web Design, Angular, React JS, Next Js, Affinity Designer, Affinity Photo, Figma, Web Development, UI Design, User Experience, Technology, Programming, Computer Science, Portfolio, Creative Design, Digital Creativity, Design Trends, Collaboration'

  }  


export default function page() {
return (
<>
<Navbar/>
<div className="aboutcontainer">
<div className="aboutme-clock">
<h1 className="about-title">About Me</h1>
<h1 className="main-clock" id="clock"><Clock/></h1>
</div>
<p>Hi there, and thanks for stopping by! My name is Phillip Andrew Bailey and I am a Front-End Developer and UX/UI designer based in LaFayette, Georgia. My hobbies comprise video games, wild-life documentaries, anime cartoons, coding, and listening to old-school rnb music. I hold a bachelor's and associate's degree in computer science from Southern New Hampshire University, where I spent 5 years studying and learning about programming, technology, and computer systems.</p>
  
<p> With a background in IT/Web Design and a love for creating user-friendly and visually pleasing experiences, I've worked on diverse projects using Angular, React JS, Next Js. My design philosophy revolves around the idea that form should follow function, and I strive to create designs that are not only aesthetically pleasing, but also highly functional and efficient. </p>
  
<p>I am skilled in a variety of design tools including affinity designer, affinity Photo, Figma. In my free time, you can find me staying up-to-date on the latest design trends, tinkering with new design tools, and collaborating with other designers on personal projects. Thank you for visiting my website and please reach out if you have questions or would like to hire me.</p>

<p><b>Kind Regards</b> <br /> Phillip Andrew Bailey</p>
<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}}
/>

<div className='about-education'>
<h1>Education</h1>


<p>Southern New Hampshire University, Manchester, NH</p>
<div
style={{
display:'flex',
justifyContent:'space-between',
placeItems:'center'
}}
>
<p>Bachelor of Science in Information Technology </p>
<p>January 2023</p>
</div>



<ul style={{display:'grid',gridGap:'20px'}}>
<li style={{listStyleType:'disc',color:'#fff'}}>Relevant Coursework: Website Design | Computer Platform Technologies | Web and Mobile User Experiences  Business Systems Analysis & Design</li>
<li style={{listStyleType:'disc',color:'#fff'}}>GPA: 3.134</li>
</ul>

<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />

<h1>CORE COMPETENCIES</h1>
<p><b>Platforms: </b> Windows 7, Windows 8.1, Windows 10, Windows 11, MacOS</p>
<p><b>Networking: </b>  LAN / WAN Administration, VPN</p>
<p><b>Languages: </b>HTML, CSS, JavaScript, React, Angular, Vue</p>
<p><b>Tools: </b>LAN Manager, Wix, Figma, Affinity Photo, Affinity Designer, Affinity Publisher, Bootstrap, jQuery, Iobit Advanced System Care, MS Office Suite (Word, Excel, PowerPoint, Outlook).</p>


<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />
<h1>INFORMATION TECHNIOLGY PROJECTS</h1>
<p><b>Belief-Ministries:</b> is a mock church website that hosts events and provides resources for members and visitors.</p>

<p><b>iTruth News:</b> is an application that incorporates Firebase authentication and allows the user to post on articles.
</p>

<p><b>Gracious-Crossing:</b> Contributed to Gracious Crossing, a home-buying website, by implementing Firebase authentication for enhanced security and a seamless listing creation feature. </p>
<p><b>Journey:</b> is an application that integrates Firebase authentication and streamlines the process of creating and managing property listings for businesses using Journey's Admin dashboard.</p>




<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />

<h1>CERTFICATES</h1>
<p><b>Fall-2022: </b> In Recognition of Outstanding Academic Achievement - Southern New Hampshire University</p>
</div>
</div>
<Footer/>
</>
)
}
