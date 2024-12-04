import { useState, useEffect } from "react";
import GaleriaImagenes from "../components/GaleriaImagenes";
import ListaEventos from "../components/events/ListaEventos";
import ListaComics from "../components/comics/ListaComics";
import { ThreeDots } from "react-loader-spinner";
import FlechaScroll from "../components/FlechaScroll";

/**
 * Página principal de la app, maneja los fetchApi para comics y eventos y paginación de eventos
 * @returns bienvenida, listado de comics y listado de eventos
 */
const Inicio = () => {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showArrow, setShowArrow] = useState(false);

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

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular los índices de los eventos a mostrar por pagina
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.length > 0 ? eventsData.slice(indexOfFirstEvent, indexOfLastEvent) : [];

   // Total de páginas
   const totalPages = Math.ceil(eventsData.length / eventsPerPage);

   // Función para cambiar de página
   const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
 

  // mientras carga y si hay error en cada una de las llamadas a la api
  //if (loading) return <p>Cargando los mejores comics...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return (
    <>
      <h1>ENCUENTRA LOS COMICS DE TUS PERSONAJES FAVORITOS</h1>
      <GaleriaImagenes />

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
      <FlechaScroll show={showArrow} />
    </>
  );
}

export default Inicio;