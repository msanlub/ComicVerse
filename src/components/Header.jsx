import '../sass/layout/_header.sass';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode'; // Asegúrate de importar el icono para el modo claro

import logo from '../assets/logoHeader.png';
import imagenFondo from '../assets/fondoHeader2.jpg';

import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useContext, useState } from "react"; // Importa useState
import { logOut } from "../config/Firebase";

/**
 * Componente de cabecera de la página que incluye el logo y el menú de navegación.
 * 
 * Este componente muestra un fondo, el logotipo de la aplicación y enlaces de navegación.
 * También maneja el inicio y cierre de sesión del usuario.
 *
 * @returns {JSX.Element} El componente renderizado que muestra la cabecera de la página.
 */
const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [isDarkMode, setIsDarkMode] = useState(false); // Estado para manejar el tema

    const handleLogout = async () => {
        await logOut();
        setUser(false);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark'); 
    };

    return (
        <header className='header'>
            <img src={imagenFondo} className='header__imagen' alt="imagen de fondo header"/>
            <img src={logo} className='header__logo' alt="logotipo de ComicVerse"/>
            <nav>
                <ul className="header__menu">
                    <li className='menu__opcion'><NavLink to="/">Inicio</NavLink></li>
                    {user && <li className='menu__opcion'><NavLink to="/usuario">Usuario</NavLink></li>}
                    {user ? (
                        <li className='menu__opcion'><NavLink onClick={handleLogout}>Cerrar sesión</NavLink></li>
                    ) : (
                        <>
                            <li className='menu__opcion'><NavLink to="/login">Login</NavLink></li>
                            <li className='menu__opcion'><NavLink to="/registro">Registro</NavLink></li>
                        </>
                    )}
                    <li className='menu__opcion'><NavLink to="/busqueda">Buscar</NavLink></li>
                </ul>
            </nav>
            <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                {isDarkMode ? <LightModeIcon style={{ color: '#FFD700' }} /> : <DarkModeIcon />}
            </div>
        </header>
    );
};

export default Header;
