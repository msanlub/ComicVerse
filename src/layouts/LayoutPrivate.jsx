import { useContext} from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
