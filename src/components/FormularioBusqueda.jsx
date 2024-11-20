import { useState } from 'react';

const BuscadorComics = () => {
  const [busqueda, setBusqueda] = useState('');
  const [formato, setFormato] = useState('');
  const [idioma, setIdioma] = useState('');
  const [paginas, setPaginas] = useState('');
  const [conVariantes, setConVariantes] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO fetch api
    console.log({ busqueda, formato, idioma, paginas, conVariantes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por título o creador"
      />

      <select value={formato} onChange={(e) => setFormato(e.target.value)}>
        <option value="">Seleccionar formato</option>
        <option value="comic">Comic</option>
        <option value="magazine">Revista</option>
        {/* TODO añadir opciones segun la api */}
      </select>

      <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
        <option value="">Seleccionar idioma</option>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        {/* TODO añadir opciones segun la api */}
      </select>

      <select value={paginas} onChange={(e) => setPaginas(e.target.value)}>
        <option value="">Seleccionar nº de páginas</option>
        <option value="0-50">0-50</option>
        <option value="51-100">51-100</option>
        <option value="101+">101+</option>
        {/* TODO añadir opciones segun la api */}
      </select>

      <div>
        <label>
          <input
            type="radio"
            checked={!conVariantes}
            onChange={() => setConVariantes(false)}
          />
          Sin variantes
        </label>
        <label>
          <input
            type="radio"
            checked={conVariantes}
            onChange={() => setConVariantes(true)}
          />
          Con variantes
        </label>
      </div>

      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscadorComics;