import { useState, useEffect } from "react";
import ListaEventos from "../components/events/ListaEventos";
import ListaComics from "../components/comics/ListaComics";
import FormularioBusqueda from "../components/forms/FormularioBusqueda"

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

  // FETCH PARA COMICS (según filtrado o sin filtros)
  const fetchComics = async (searchParams = {}) => {
    setLoading(true);
    setError(null);
    try {
      let url = `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}`;

      // Si no hay parámetros de búsqueda, obtenemos todos los cómics
      if (Object.keys(searchParams).length > 0) {
        Object.entries(searchParams).forEach(([key, value]) => {
          if (value) url += `&${key}=${value}`;
        });
      }

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
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchComics(); // Llama a fetchComics sin filtros para obtener todos los cómics
  }, []);

  // Busqueda con filtros
  const handleSearch = (searchParams) => {
    fetchComics(searchParams); 
  };

  // Calcular los índices de los eventos a mostrar por pagina
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.length > 0 ? eventsData.slice(indexOfFirstEvent, indexOfLastEvent) : [];

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
 

  // mientras carga y si hay error en cada una de las llamadas a la api
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return (
    <section className='container__listados'>
      <h1>Encuentra los comics de tus personajes favoritos</h1>

      <FormularioBusqueda onSearch={handleSearch} />
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