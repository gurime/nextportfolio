
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PasswordGenerator from '../Components/PasswordGenerator';

export const metadata = {
    title: 'Phillip Bailey - Password Generator',
    description: 'Generate strong and secure passwords with Phillip Bailey\'s Password Generator. Customize the length of your password, and easily create complex and reliable passwords for your accounts. Enhance your online security with this user-friendly password tool.',
    keywords: 'Password Generator, Phillip Bailey, Secure Passwords, Strong Passwords, Online Security, Password Length, Password Strength, Web Tool'
  }
  

export default function Password() {

return (
<>
<Navbar/>
<PasswordGenerator/>
<Footer/>
</>
)
}
