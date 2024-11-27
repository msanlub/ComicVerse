import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Artista from "../pages/Artista";
import Comic from "../pages/Comic";
import ConfigUsuario from "../pages/ConfigUsuario";
import LayoutPublic from "../layouts/LayoutPublic";
import LayoutPrivate from "../layouts/LayoutPrivate";
import Evento from "../pages/Evento";
import Personaje from "../pages/Personaje";
import Usuario from "../pages/Usuario";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { lazy } from 'react'

// Lazy loading
const artista = lazy(() => import("../pages/Artista"));
const evento = lazy(() => import("../pages/Evento"));
const comic = lazy(() => import("../pages/Comic"));
const configUser = lazy(() => import("../pages/ConfigUsuario"));
const contacto = lazy(() => import("../pages/Contacto"));
const personaje = lazy(() => import("../pages/Personaje"));

/**
 *  Manejo del enrutamiento de las páginas de la app
 */
export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic />,
    //  aquí se muestran los hijos de la ruta indicada, lo que ira en outlet de layout, siendo inicio la raíz
      children: [
        {
          index: true,
          element: <Inicio />,
        },
        {
          path: "/artista",
          element: <Artista />,
        },
        {
          path: "/comic",
          element: <Comic />,
        },
        {
          path: "/configusuario",
          element: <ConfigUsuario />,
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
          path: "/personaje",
          element: <Personaje />,
        },
        {
          path: "/evento",
          element: <Evento />,
        },
        {
          path: "/contacto",
          element: <Contacto />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);