import { useEffect, useState } from 'react';

const BuscadorComics = ({ onSearch }) => {
  const [characters, setCharacters] = useState('');
  const [creators, setCreators] = useState('');
  const [format, setFormat] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [noVariants, setNoVariants] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      // const apiKey = import.meta.env.VITE_API_KEY;
      const apiKey ='cee90f8ea5b8601ab4a8f5d0c12a47a2';
      const baseUrl = 'https://gateway.marvel.com/v1/public/comics';

      let url = `${baseUrl}?apikey=${apiKey}`;
      if (characters) url += `&characters=${characters}`;
      if (creators) url += `&creators=${creators}`;
      if (format) url += `&format=${format}`;
      if (orderBy) url += `&orderBy=${orderBy}`;
      if (noVariants) url += '&noVariants=true';

      try {
        const response = await fetch(url);
        const data = await response.json();
        onSearch(data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchComics();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [characters, creators, format, orderBy, noVariants, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
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