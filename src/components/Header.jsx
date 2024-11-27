import '../sass/layout/_header.sass';

import logo from '../assets/logoHeader.png';

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
            <img src={logo} className='header__logo' alt="logotipo de ComicVerse"/>
            <nav className="header__menu">
                <NavLink className='menu__opcion' to="/">Inicio</NavLink>
                {
                    user && <NavLink  className='menu__opcion' to="/usuario">Usuario</NavLink>
                }
                {
                    user ? (
                        <NavLink className='menu__opcion' onClick={handleLogout}>Cerrar sesión</NavLink>
                    ):(
                        // englobar en un componente 
                        <>
                            <NavLink className='menu__opcion' to="/login">Login</NavLink>
                            <NavLink className='menu__opcion' to="/registro">Registro</NavLink>
                        </>
                    )
                }
            </nav>

        </header>
    );
};



export default Header;