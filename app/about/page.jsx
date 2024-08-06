
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
<h1 className="password-title">About Me</h1>
<h1 className="main-clock" id="clock"><Clock/></h1>
</div>
<p>Hi there, and thanks for stopping by! My name is Phillip Andrew Bailey and I am a Software Engineer based in LaFayette, Georgia. My hobbies comprise video games, wild-life documentaries, anime cartoons, coding, and listening to old-school rnb music.</p>
  
<p> With a background in IT/Web Design and a love for creating user-friendly and visually pleasing experiences, I've worked on diverse projects using React JS and Next Js. My design philosophy revolves around the idea that form should follow function, and I strive to create designs that are not only aesthetically pleasing, but also highly functional and efficient. </p>
  
<p>I specialize in programming languages such as Next.js. In my free time, I stay up-to-date on the latest trends in web development and collaborate with other professionals on personal projects. Thank you for visiting my website, and please reach out if you have any questions or if you're interested in hiring me.</p>

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





<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />

<h1>Skills</h1>
<p><b>Frontend: </b>  React | Next JS | TypeScript | HTML | CSS | JavaScript</p>
<p><b>Backend: </b> Node JS</p>
<p><b>DATABASES: </b>Supabase | Firebase | MongoDB | PostgreSQL</p>
<p><b>Other: </b>UI/UX Design  | SEO | Accessibility (WCAG 2.1) | Chrome DevTools</p>


<hr
style={{
color:'#af66ff',
border:'solid 1px currentcolor'
}} />
<h1>PROJECTS</h1>
<p><b>Belief-Ministries</b> is dedicated to empowering churches with the tools needed to create a meaningful online presence. </p>

<p><b>iTruth News:</b> Stay informed with iTruth News - your reliable source for breaking news updates and the latest headlines.
</p>

<p><b>Gracious-Crossing</b> the real estate app for admins and users. Manage, list, and find properties with ease.  </p>

<p><b>Doctor Care:</b> Explore Doctor Care to find detailed information about physicians, patient resources, and healthcare services.</p>




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
