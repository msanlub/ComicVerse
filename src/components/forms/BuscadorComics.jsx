import { useState, useEffect } from 'react';

/**
 * Componente para buscar cómics basado en filtros ingresados por el usuario.
 * 
 * Este componente permite a los usuarios seleccionar filtros como formato de publicación,
 * criterios de ordenamiento y si desean incluir variantes en la búsqueda.
 * Cada vez que se cambia un filtro, se llama a la función `onSearch` con los valores actuales
 * de los filtros.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onSearch - Función que se llama con los filtros aplicados cada vez que cambian.
 *
 * @returns {JSX.Element} El componente renderizado que muestra el formulario de búsqueda.
 */
const BuscadorComics = ({ onSearch }) => {
  const [format, setFormat] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [noVariants, setNoVariants] = useState(true);

  // Llama a onSearch cada vez que cambie un filtro
  useEffect(() => {
    onSearch({
      format,
      orderBy,
      noVariants: noVariants ? 'true' : 'false'
    });
  }, [format, orderBy, noVariants]); 

  return (
    <form className='formulario__busqueda'>
      <select className='busqueda__formato' value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="">Formato de publicación</option>
        <option value="comic">Comic</option>
        <option value="magazine">Revista</option>
        <option value="trade paperback">De bolsillo</option>
        <option value="hardcover">Tapa dura</option>
        <option value="graphic novel">Novela gráfica</option>
        <option value="digital comic">Digital</option>
      </select>

      <select className='busqueda__ordenar' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="issueNumber">Número de emisión</option>
        <option value="onsaleDate">Fecha de venta</option>
        <option value="title">Título</option>
      </select>

      <section className='busqueda__variantes'>
        <label className='busqueda__label'>
          <input
            className='busqueda__conVariante'
            type="radio"
            checked={!noVariants}
            onChange={() => setNoVariants(false)}
          />
          Con variantes
        </label>
        <label className='busqueda__label'>
          <input
            className='busqueda__sinVariante'
            type="radio"
            checked={noVariants}
            onChange={() => setNoVariants(true)}
          />
          Sin variantes
        </label>
      </section>
    </form>
  );
};

export default BuscadorComics;