import { useState, useEffect } from "react";
import ListaEventos from "../components/events/ListaEventos";
import ListaComics from "../components/comics/ListaComics";

/**
 * Página principal de la app, maneja los fetchApi para comics y eventos y paginación de eventos
 * @returns bienvenida, listado de comics y listado de eventos
 */
const Inicio = () => {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // paginación y eventos por pagina
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  // defino la apikey
  const apiKey = import.meta.env.VITE_MARVEL_API_KEY;

  // FETCH PARA COMICS
  const fetchComics = async () => {
    try {
      let url = `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error fetching comics: ${response.status}`);

      const result = await response.json();
      setComicsData(result.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // FETCH PARA EVENTOS
   const fetchEvents = async () => {
    try {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/events?apikey=${apiKey}`);
      if (!response.ok) throw new Error(`Error fetching events: ${response.status}`);
      
      const result = await response.json();
      setEventsData(result.data.results);
    } catch (err) {
      setError(err.message);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchComics(); 
  }, []);

  // Calcular los índices de los eventos a mostrar por pagina
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.length > 0 ? eventsData.slice(indexOfFirstEvent, indexOfLastEvent) : [];

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
 

  // mientras carga y si hay error en cada una de las llamadas a la api
  if (loading) return <p>Cargando los mejores comics...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return (
    <section className='container__listados'>
      <h1>Encuentra los comics de tus personajes favoritos</h1>

      <section className="listado__comics">
        <h1>Cómics</h1>
        <ListaComics comics={comicsData} />
      </section>

      <section className='listado__eventos'>
        <h1>Eventos</h1>
        <ListaEventos 
          eventos={currentEvents} 
          currentPage={currentPage}
          eventsPerPage={eventsPerPage}
          totalEvents={eventsData.length}
          onPageChange={handlePageChange}
        />
      </section>
    </section>
  );
};

export default Inicio;