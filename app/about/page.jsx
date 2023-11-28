
import React from 'react'
import Clock from '../Components/Clock'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function page() {
return (
<>
<Navbar/>
<div className="aboutcontainer">
<div className="aboutme-clock">
<h1 className="about-title">About Me</h1>
<h1 className="main-clock" id="clock"><Clock/></h1>
</div>
<p>Hi there, and thanks for stopping by! My name is Phillip Andrew Bailey and I am a Front-End Developer and UX/UI designer based in LaFayette, Georgia. My hobbies consist of video games, animal documentries, anime cartoons, coding, and listening to old-school rnb. I hold a bachelor's and associate's degree in computer science from Southern New Hampshire University, where I spent 5 years studying and learning about programming, Technology, and computer systems.</p>
  
<p> With a background in Information Technology/Web Design and a passion for creating intuitive and visually appealing user experiences, I have had the opportunity to work on a wide range of projects using languages like Angular, React JS, Next Js, and Vue.
My design philosophy revolves around the idea that form should follow function, and I strive to create designs that are not only aesthetically pleasing but also highly functional and efficient. </p>
  
<p>I am skilled in a variety of design tools including Affinity designer, Affinity Photo, Figma.
In my free time, you can find me staying up-to-date on the latest design trends, tinkering with new design tools, and collaborating with other designers on personal projects. Thank you for visiting my website and please feel free to reach out if you have any questions or would like to hire me.</p>
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
<p>Associate of Science in Information Technology </p>
<p>September 2021</p>
</div>



<ul style={{display:'grid',gridGap:'20px'}}>
<li style={{listStyleType:'disc',color:'#fff'}}>Relevant Coursework: Website Design | Computer Platform Technologies | Web and Mobile User Experiences  Business Systems Analysis & Design</li>
<li style={{listStyleType:'disc',color:'#fff'}}>GPA: 3.097</li>
</ul>





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

<p><b>iTruth News:</b> is a mock news website that covers a wide range of topics, including tech, politics, sports, finances, education, world news, gaming, and fashion.</p>

<p><b>Gracious-Crossing:</b>  is a mock project that provides users with a mortgage calculator tool that allows them to calculate their mortgage payments based on various factors such as loan amount, interest rate, and term. </p>
<p><b>Journey:</b>  is a mock project that offers engaging, informative, and well-researched travel blogs and news that cater to different audiences..</p>




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
