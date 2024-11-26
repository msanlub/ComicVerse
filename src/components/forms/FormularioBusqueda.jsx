import { useState } from 'react';

const BuscadorComics = ({ onSearch }) => {
  const [characters, setCharacters] = useState('');
  const [creators, setCreators] = useState('');
  const [format, setFormat] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [noVariants, setNoVariants] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      characters,
      creators,
      format,
      orderBy,
      noVariants: noVariants ? 'true' : 'false'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={characters}
        onChange={(e) => setCharacters(e.target.value)}
        placeholder="Buscar por personaje/es"
      />

      <input
        type="text"
        value={creators}
        onChange={(e) => setCreators(e.target.value)}
        placeholder="Buscar por creador/es"
      />

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
        <option value="FocDate">Fecha de publicación</option>
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

      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscadorComics;