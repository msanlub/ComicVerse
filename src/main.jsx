
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'

import './sass/main.scss';

import UserProvider from './context/UserContext';
import { CssBaseline } from '@mui/material';

/**
 * Configura y renderiza la aplicación.
 * 
 * Este archivo es el punto de entrada de la aplicación, donde se configura el enrutamiento
 * y se proporciona el contexto de usuario. Utiliza el RouterProvider para manejar las rutas
 * y el UserProvider para gestionar la autenticación del usuario.
 *
 * 
 */
createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline/>
        <UserProvider >
            <RouterProvider router={router} />
        </UserProvider>
    </>
)