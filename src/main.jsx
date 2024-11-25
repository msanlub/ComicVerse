import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'

import '@fontsource/alumni-sans/300.css';
import '@fontsource/alumni-sans/400.css';
import '@fontsource/alumni-sans/500.css';
import '@fontsource/alumni-sans/700.css';

import UserProvider from './context/UserContext';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <>
        <CssBaseline/>
        <UserProvider >
            <RouterProvider router={router} />
        </UserProvider>
    </>
)