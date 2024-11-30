import { useState, useEffect } from 'react';

/**
 * Devuelve la búsqueda de los filtros que ingresa el usuario de los comics para personaje,eventos o creadores
 * @param {onSearch}
 * @returns 
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
    <form>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="">Formato de publicación</option>
        <option value="comic">Comic</option>
        <option value="magazine">Revista</option>
        <option value="trade paperback">De bolsillo</option>
        <option value="hardcover">Tapa dura</option>
        <option value="graphic novel">Novela gráfica</option>
        <option value="digital comic">Digital</option>
      </select>

      <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="issueNumber">Número de emisión</option>
        <option value="onsaleDate">Fecha de venta</option>
        <option value="title">Título</option>
      </select>

      <section>
        <label>
          <input
            type="radio"
            checked={!noVariants}
            onChange={() => setNoVariants(false)}
          />
          Con variantes
        </label>
        <label>
          <input
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