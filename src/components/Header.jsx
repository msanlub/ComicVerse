import logo from '../assets/logoHeader.png';
import '../css/components/Header.css'; 
import { NavLink} from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useContext } from "react";
import { logOut } from "../config/Firebase";

const Header = () => {
    const {user, setUser} = useContext(UserContext)
    
    const handleLogout = async()=> {
        await logOut()
        setUser(false)
    }

    return (
        <nav>
            <img src={logo} alt='logo'/>
            <NavLink to="/">Inicio  |</NavLink>

            {
                user && <NavLink to="/usuario">Usuario  |</NavLink>
            }
            {
                user ? (
                    <NavLink onClick={handleLogout}>Cerrar sesión</NavLink>
                ):(
                    // englobar en un componente 
                    <>
                        <NavLink to="/login">Login  |</NavLink>
                        <NavLink to="/registro">Registro  |</NavLink>
                    </>
                )
            }
        </nav>
    );
};



export default Header;