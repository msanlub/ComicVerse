import { useContext} from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

/**
 * Componente de diseño privado que protege las rutas que requieren autenticación.
 * 
 * Este componente verifica si hay un usuario autenticado en el contexto de usuario.
 * Si el usuario está autenticado, renderiza los componentes hijos mediante `Outlet`.
 * Si no hay un usuario autenticado, redirige al usuario a la página de inicio.
 *
 * @returns {JSX.Element} El componente renderizado que muestra los hijos si el usuario está autenticado,
 * o redirige a la página de inicio si no lo está.
 */
const LayoutPrivate = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <div>
            {
                user ? <Outlet /> : <Navigate to="/"/>
            }
        </div>
       
    );
};

export default LayoutPrivate;
