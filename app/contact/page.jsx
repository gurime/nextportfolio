
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'




export const metadata = {
  title: 'Phillip Bailey - Contact',
  description: 'Get in touch with Phillip Andrew Bailey, a Front-End Developer and UX/UI designer based in LaFayette, Georgia. Explore contact information, including phone number, address, and email. Reach out for collaboration or job interview!',
  keywords: 'Contact, Phillip Andrew Bailey, Front-End Developer, UX/UI designer, LaFayette, Georgia, Phone Number, Address, Email, Collaboration'
}



import TicTacToe from '../Components/TicTacToe'
import Riddle from '../Components/Riddle'
export default function contact() {
 
  return (
<>
<Navbar/>
<Riddle/>


<div className="container">
<h1 style={{textAlign:'center'}} className="faq-title" >Tic-Tac-Toe</h1>        
<TicTacToe/>
</div>
<Footer/>
</>
)
}
