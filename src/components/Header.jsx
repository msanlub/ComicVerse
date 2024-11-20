import { Link } from 'react-router-dom';
import logo from '../assets/logoHeader.png';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <section className="header">
            <section className="logo">
                <img src={logo} alt="Logo" />
            </section>
            <nav className="navbar">
                    <ul>
                        <li><Link to='/' >INICIO</Link></li>
                        <li><Link to='/usuario' >USUARIO</Link></li>
                        <li><Link to='/evento' >LOGIN</Link></li>
                        <li><Link to='/artista' >ARTISTA</Link></li>
                    </ul>
                </nav>
            <section className="buscador-container">
                <input type="text" placeholder="Buscar..." />
            </section>     
        </section>
    );
};

export default Header;