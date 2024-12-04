import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";
import Personaje from "../pages/Personaje";
import Usuario from "../pages/Usuario";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { lazy } from 'react'

// Lazy loading

const contacto = lazy(() => import("../pages/Contacto"));
const personaje = lazy(() => import("../pages/Personaje"));

/**
 * Manejo del enrutamiento de las páginas de la aplicación.
 * 
 * Este objeto define las rutas y sus componentes asociados, 
 * incluyendo rutas públicas y privadas, así como la gestión de errores.
 * 
 * @returns {Object} El objeto de enrutamiento creado por createBrowserRouter.
 */
export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic />,
      errorElement: <NotFound />,
    //  aquí se muestran los hijos de la ruta indicada, lo que ira en outlet de layout, siendo inicio la raíz
      children: [
        {
          index: true,
          element: <Inicio />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
            path: "/registro",
            element: <Registro />,
        },
        {
          path: "/usuario",
          element: <LayoutPrivate />,
          children: [
              {
                  index: true,
                  element: <Usuario />,
              },
          ],
        },
        {
          path: "/busqueda",
          element: <Personaje />,
        },
        {
          path: "/contacto",
          element: <Contacto />,
        },
        {
          path: "*", 
          element: <NotFound />, 
        },
      ],
    },
  ]);