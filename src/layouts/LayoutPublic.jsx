import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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