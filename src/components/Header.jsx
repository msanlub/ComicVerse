
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import logo from '../assets/logoHeader.png';
import imagenFondo from '../assets/fondoHeader2.jpg';

import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useContext, useState, useEffect } from "react";
import { logOut } from "../config/Firebase";

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.body.classList.contains('dark-theme'); // Verifica si ya está en modo oscuro
    });

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode); 
    }, [isDarkMode]);

    const handleLogout = async () => {
        await logOut();
        setUser(false);
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode); 
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
            <div 
                onClick={toggleTheme} 
                className={`theme-icon ${isDarkMode ? 'theme-icon--dark' : 'theme-icon--light'}`}
            >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
        </header>
    );
};

export default Header;
