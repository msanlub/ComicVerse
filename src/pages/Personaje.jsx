import '../sass/views/_personajes.sass';

import { useEffect, useState } from "react";
import ListaComics from "../components/comics/ListaComics";
import BuscadorComics from "../components/forms/BuscadorComics"; 
import { ThreeDots } from "react-loader-spinner";
import ListaEventos from "../components/events/ListaEventos";

/**
 * Componente que permite buscar y mostrar información sobre un personaje de Marvel,
 * incluyendo sus cómics y eventos asociados.
 *
 * @returns {JSX.Element} El componente renderizado que muestra la información del personaje,
 * cómics y eventos relacionados.
 */
const Personaje = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState({ id: null, name: '', description: '', image: '' }); 
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCharacter, setHasCharacter] = useState(false); 

  // Paginación y eventos por página
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  // Defino la API key
  const apiKey = import.meta.env.VITE_MARVEL_API_KEY;
  const apiHash = import.meta.env.VITE_MARVEL_API_KEY_HASH;

  // FETCH PARA PERSONAJE
  const fetchCharacter = async (name) => {
    setLoading(true);
    try {
      let url = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=${apiKey}&hash=${apiHash}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error fetching character: ${response.status}`);

      const result = await response.json();
      if (result.data.results.length > 0) {
        const character = result.data.results[0];
        setCharacterData({
          id: character.id,
          name: character.name,
          description: character.description || "Descripción no disponible",
          image: `${character.thumbnail.path}.${character.thumbnail.extension}` 
        });
        setHasCharacter(true); // Se encontró un personaje
      } else {
        throw new Error("No se encontró ningún personaje con ese nombre.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // FETCH PARA CÓMICS CON FILTROS
  const fetchComics = async (filters) => {
    if (characterData.id) {
      try {
        let url = `https://gateway.marvel.com/v1/public/characters/${characterData.id}/comics?ts=1&apikey=${apiKey}&hash=${apiHash}`;
        
        // Añadir filtros a la URL si existen
        if (filters.format) url += `&format=${filters.format}`;
        if (filters.orderBy) url += `&orderBy=${filters.orderBy}`;
        if (filters.noVariants === 'true') url += `&noVariants=true`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error fetching comics: ${response.status}`);

        const result = await response.json();
        setComicsData(result.data.results);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // FETCH PARA EVENTOS
  const fetchEvents = async () => {
    if (characterData.id) {
      try {
        let url = `https://gateway.marvel.com/v1/public/characters/${characterData.id}/events?ts=1&apikey=${apiKey}&hash=${apiHash}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error fetching events: ${response.status}`);

        const result = await response.json();
        setEventsData(result.data.results);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (characterData.id) { 
      fetchComics({}); // Llamada inicial sin filtros
      fetchEvents();
    }
  }, [characterData.id]);

  // Calcular los índices de los eventos a mostrar por página
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Manejar la búsqueda con filtros desde BuscadorComics
  const handleSearchFilters = (filters) => {
    fetchComics(filters); // Aplicar los filtros al buscar cómics
  };

  if (error) return <p className="error__mensaje">Error: {error}</p>;

  return (
    <section className='contenedor__busqueda'>
      <input
      type="text"
      value={characterName}
      onChange={(e) => setCharacterName(e.target.value)}
      placeholder="Buscar por personaje"
      />
      
      <button onClick={() => fetchCharacter(characterName)}>
        Buscar
      </button>

      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#A62940"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          className='spinner'
        />
      ) : (
        <>
          {hasCharacter && (
            <>
              <div className="character__info">
                <section className='info__descripcion'>
                  <h2 className='descripcion__titulo'>{characterData.name}</h2>
                  <p className='descripcion__bibliografia'>{characterData.description}</p>
                </section>
                <img className='info__img' src={characterData.image} alt={characterData.name} />
              </div>

              <BuscadorComics onSearch={handleSearchFilters} />

              <section className="listado__comics">
                <h1>COMICS</h1>
                <ListaComics comics={comicsData} />
              </section>

              <section className='listado__eventos'>
                <h1>EVENTOS</h1>
                <ListaEventos 
                  eventos={currentEvents} 
                  currentPage={currentPage}
                  eventsPerPage={eventsPerPage}
                  totalEvents={eventsData.length}
                  onPageChange={handlePageChange}
                />
              </section>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default Personaje;