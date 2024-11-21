import FormularioContacto from "../components/forms/FormularioContacto"
import imgContacto from '../assets/img_contacto.jpg';

const Contacto = () => {
  return (
    <section>
      <img src={imgContacto} alt="" />
      <FormularioContacto />
    </section>
  )
}

export default Contacto