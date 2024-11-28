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
      <nav >
        <ul className='footer__menu'>
          <li className='menu__opcionfoot'>
            <NavLink  to='' >Política de privacidad</NavLink>
          </li>
          <li className='menu__opcionfoot'> 
            <NavLink  to='' >Cookies</NavLink>
          </li>
          <li className='menu__opcionfoot'> 
            <NavLink  to='' >Aviso Legal</NavLink>
          </li>
          <li className='menu__opcionfoot'> 
            <NavLink  to='/contacto' >Contacto</NavLink>
          </li>
        </ul>
        
      </nav>    
      <img className='footer__logo' src={logo} alt="LogoFooter" />
    </footer>
  )
}

export default Footer