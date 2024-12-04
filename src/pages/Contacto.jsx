import FormularioContacto from "../components/forms/FormularioContacto"
import imgContacto from '../assets/img_contacto.jpg';

/**
 * Página de contacto que permite a los usuarios enviar un formulario de contacto.
 * 
 * @returns {JSX.Element} El componente renderizado que muestra una imagen de contacto
 * y un formulario para que los usuarios envíen sus consultas o comentarios.
 */
const Contacto = () => {
  return (
    <section>
      <img src={imgContacto} alt="" />
      <FormularioContacto />
    </section>
  )
}

export default Contacto