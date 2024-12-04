import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Componente de diseño público que incluye el encabezado y pie de página.
 * 
 * Este componente se utiliza para renderizar las rutas públicas de la aplicación.
 * Incluye un encabezado en la parte superior, un área principal donde se renderizan
 * los componentes hijos mediante `Outlet`, y un pie de página en la parte inferior.
 *
 * @returns {JSX.Element} El componente renderizado que muestra el encabezado, 
 * el contenido principal (hijos) y el pie de página.
 */
const layoutPublic = () => {
  return (
    <div>
        <>
      <Header />
      <main>
        {/* componente de react router que marca donde se renderiza los hijos de la ruta */}
        <Outlet /> 
      </main>
      <Footer />
    </>
    </div>
  )
}

export default layoutPublic