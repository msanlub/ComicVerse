
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'

import './sass/main.sass';

import UserProvider from './context/UserContext';
import { CssBaseline } from '@mui/material';

/**
 * Configura y renderiza la aplicación con router y un proveedor de contexto para la gestión de usuarios
 */
createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline/>
        <UserProvider >
            <RouterProvider router={router} />
        </UserProvider>
    </>
)