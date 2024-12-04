import '../sass/layout/_footer.sass';
import logo from '../assets/logoFooter.png';
import { NavLink } from 'react-router-dom';

/**
 * Componente de pie de página que incluye enlaces de navegación y un logotipo.
 * 
 * Este componente renderiza un menú de navegación con enlaces a la política de privacidad,
 * cookies, aviso legal y contacto. También muestra el logotipo de la aplicación en el pie de página.
 *
 * @returns {JSX.Element} El componente renderizado que muestra el pie de página.
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