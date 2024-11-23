import { useState } from 'react';

const BuscadorComics = () => {
  const [characters, setBusquedaPersonaje] = useState('');
  const [creators, setBusquedaCreador] = useState('');
  const [format, setFormato] = useState('');
  const [orderBy, setOrden] = useState('');
  const [noVariants, setNoVariantes] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO fetch api??
    console.log({ characters, creators, format, orderBy, noVariants });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={characters}
        onChange={(e) => setBusquedaPersonaje(e.target.value)}
        placeholder="Buscar por personaje/es"
      />

      <input
        type="text"
        value={creators}
        onChange={(e) => setBusquedaCreador(e.target.value)}
        placeholder="Buscar por creador/es"
      />

      <select value={format} onChange={(e) => setFormato(e.target.value)}>
        <option value="">Formato de publicación</option>
        <option value="comic">Comic</option>
        <option value="magazine">Revista</option>
        <option value="trade paperback">De bolsillo</option>
        <option value="hardcover">Tapa dura</option>
        <option value="graphic novel">Novela gráfica</option>
        <option value="digital comic">Digital</option>
      </select>

      <select value={orderBy} onChange={(e) => setOrden(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="FocDate">Fecha de publicación</option>
        <option value="onsaleDate">Fecha de venta</option>
        <option value="title">Título</option>
      </select>

      <section>
        <label>
          <input
            type="radio"
            checked={!noVariants}
            onChange={() => setNoVariantes(false)}
          />
          Con variantes
        </label>
        <label>
          <input
            type="radio"
            checked={noVariants}
            onChange={() => setNoVariantes(true)}
          />
          Sin variantes
        </label>
      </section>

      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscadorComics;