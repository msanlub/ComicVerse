import { useState } from 'react';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    mensaje: '',
    aceptoPolitica: false
  });

  const [errors, setErrors] = useState({
    email: '',
    nombre: '',
    mensaje: ''
  });

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Actualiza el estado previo del formulario por cada elemento (se va guardando una copia digamos)
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Validación en tiempo real
    validateField(name, type === 'checkbox' ? checked : value);
  };

  // Función para validar un campo específico
  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'email':
        if (!value) {
          errorMessage = 'El email es requerido.';
        } else if (!validarEmail(value)) {
          errorMessage = 'Por favor, introduce un email válido.';
        }
        break;
      case 'nombre':
        if (!value.trim()) {
          errorMessage = 'El nombre no puede estar vacío.';
        }
        break;
      case 'mensaje':
        if (!value.trim()) {
          errorMessage = 'El mensaje no puede estar vacío.';
        }
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  // Función para validar el email
  const validarEmail = (email) => {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return formatoEmail.test(email);
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si hay errores antes de enviar
    if (errors.email || errors.nombre || errors.mensaje) {
      alert("Por favor corrige los errores antes de enviar.");
      return;
    }

    // Si todas las validaciones pasan, se pueden procesar los datos (implementacion de envio de datos??)
    console.log('Datos del formulario:', formData);
    
    // Resetear el formulario después del envío
    setFormData({
      email: '',
      nombre: '',
      mensaje: '',
      aceptoPolitica: false
    });
    
    setErrors({ email: '', nombre: '', mensaje: '' }); // Resetear errores
  };

  return (
    <section className="contenedorFormulario">
      <h2>¿Cómo podemos ayudarte?</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre}
            onChange={handleChange}
            required 
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <label htmlFor="mensaje">Escríbenos:</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows="4" 
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}
          
          <label>
            <input 
              type="checkbox" 
              name="aceptoPolitica" 
              checked={formData.aceptoPolitica}
              onChange={handleChange}
              required
            /> He leído y acepto la política de privacidad.
          </label>
        </fieldset>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default FormularioContacto;