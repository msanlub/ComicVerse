import { Link } from 'react-router-dom';
import logo from '../assets/logoFooter.png';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <section className='footer'>
        <nav className='navbarfooter'>
            <ul>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
                <li>Aviso legal</li>
                <li><Link to='/contacto' >Contacto</Link></li>
            </ul>
        </nav>
        <section className='logoFooter'>
            <img src={logo} alt="LogoFooter" />
        </section>
    </section>
  )
}

export default Footer