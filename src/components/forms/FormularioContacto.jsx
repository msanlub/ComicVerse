import { useState } from 'react';

const FormularioContacto = () => {
  const estadoInicial = {
    TodoEmail: '',
    TodoNombre: '',
    TodoMensaje: '',
    TodoCheck: false
  }

  const [todo, setTodo] = useState(estadoInicial);
  const [errors, setErrors] = useState({});

  // maneja el envio de formularios
  const handleSubmit = (e) => {
    e.preventDefault();
    const {TodoNombre, TodoMensaje, TodoEmail, TodoCheck} = todo;
    if (!TodoNombre.trim() || !TodoMensaje.trim() || !validarEmail(TodoEmail) || !TodoCheck) {
      alert("Por favor corrige los errores antes de enviar.");
      return;
    }
    console.log('Datos del formulario:', todo);
    setTodo(estadoInicial);
    setErrors({});
  };

  // "agrega" los cambios al todo dependiendo si es text o checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value
    });
    validateField(name, type === 'checkbox' ? checked : value);
  };

  // valida cada campo y definee mensaje de error
  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'TodoEmail':
        if (!value) {
          errorMessage = 'El email es requerido.';
        } else if (!validarEmail(value)) {
          errorMessage = 'Por favor, introduce un email válido.';
        }
        break;
      case 'TodoNombre':
        if (!value.trim()) {
          errorMessage = 'El nombre no puede estar vacío.';
        }
        break;
      case 'TodoMensaje':
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

  // valida el formato de email
  const validarEmail = (email) => {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return formatoEmail.test(email);
  };

  return (
    <section className="contenedorFormulario">
      <h2>¿Cómo podemos ayudarte?</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="TodoNombre">Nombre:</label>
          <input 
            type="text" 
            name="TodoNombre" 
            value={todo.TodoNombre}
            onChange={handleChange}
            required 
          />
          {errors.TodoNombre && <span className="error">{errors.TodoNombre}</span>}

          <label htmlFor="TodoEmail">Email:</label>
          <input 
            type="email" 
            name="TodoEmail" 
            value={todo.TodoEmail}
            onChange={handleChange}
            required 
          />
          {errors.TodoEmail && <span className="error">{errors.TodoEmail}</span>}
          
          <label htmlFor="TodoMensaje">Escríbenos:</label>
          <textarea 
            name="TodoMensaje" 
            rows="8" 
            value={todo.TodoMensaje}
            onChange={handleChange}
            required
          ></textarea>
          {errors.TodoMensaje && <span className="error">{errors.TodoMensaje}</span>}
          
          <label>
            <input 
              type="checkbox" 
              name="TodoCheck" 
              checked={todo.TodoCheck}
              onChange={handleChange}
              required
            /> He leído y acepto la política de privacidad.
          </label>
        </fieldset>
        
        <button className='enviarContacto' type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default FormularioContacto;