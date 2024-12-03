import '../sass/layout/_header.sass';

import logo from '../assets/logoHeader.png';
import imagenFondo from '../assets/fondoHeader2.jpg';

import { NavLink} from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useContext } from "react";
import { logOut } from "../config/Firebase";

/**
 * Componente header o cabecera de página
 * @returns Cabecera de página (logo,menú)
 */
const Header = () => {
    const {user, setUser} = useContext(UserContext)
    
    const handleLogout = async()=> {
        await logOut()
        setUser(false)
    }

    return (
        <header className='header'>
            <img src={imagenFondo} className='header__imagen' alt="imagen de fondo header"/>
            <img src={logo} className='header__logo' alt="logotipo de ComicVerse"/>
            <nav>
                <ul className="header__menu">
                <li className='menu__opcion'><NavLink  to="/">Inicio</NavLink></li>
                {
                   user && <li className='menu__opcion'><NavLink   to="/usuario">Usuario</NavLink></li> 
                }
                {
                    user ? (
                        <li className='menu__opcion'><NavLink  onClick={handleLogout}>Cerrar sesión</NavLink></li>
                    ):(
                        // englobar en un componente 
                        <>
                            <li className='menu__opcion'><NavLink  to="/login">Login</NavLink></li>
                            <li className='menu__opcion'><NavLink  to="/registro">Registro</NavLink></li>
                        </>
                    )
                }
                <li className='menu__opcion'><NavLink  to="/busqueda">Buscar</NavLink></li>
                </ul>
                
            </nav>

        </header>
    );
};



export default Header;