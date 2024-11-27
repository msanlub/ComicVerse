import '../sass/layout/_footer.sass';
import logo from '../assets/logoFooter.png';
import { NavLink } from 'react-router-dom';

/**
 * Componente Footer o pie de página
 * @returns enlaces de footer
 */
const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer__menu'>
        <NavLink className='menu__opcionfoot' to='' >Política de privacidad</NavLink>
        <NavLink className='menu__opcionfoot' to='' >Cookies</NavLink>
        <NavLink className='menu__opcionfoot' to='' >Aviso Legal</NavLink>
        <NavLink className='menu__opcionfoot' to='/contacto' >Contacto</NavLink>
      </nav>    
      <img className='footer__logo' src={logo} alt="LogoFooter" />
    </footer>
  )
}

export default Footer