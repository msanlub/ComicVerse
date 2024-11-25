import { useState, useEffect } from "react";
import ListaEventos from "../components/events/ListaEventos";
import ListaComics from "../components/comics/ListaComics";
import FormularioBusqueda from "../components/forms/FormularioBusqueda"

const Inicio = () => {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const apiKey = import.meta.env.VITE_MARVEL_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [comicsRes, eventsRes] = await Promise.all([
          fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}`),
          fetch(`https://gateway.marvel.com:443/v1/public/events?apikey=${apiKey}`)
        ]);

        if (!comicsRes.ok) throw new Error(`Error fetching comics: ${comicsRes.status}`);
        if (!eventsRes.ok) throw new Error(`Error fetching events: ${eventsRes.status}`);

        const comicsResult = await comicsRes.json();
        const eventsResult = await eventsRes.json();

        setComicsData(comicsResult.data.results);
        setEventsData(eventsResult.data.results);

      } catch (err) {
        setError(err.message);
        
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calcular los índices de los eventos a mostrar
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Imágenes</p>
      <h1>Encuentra los comics de tus personajes favoritos</h1>
      <FormularioBusqueda />
      <section className="listados__aleatorios">
        <h1>Cómics</h1>
        <ListaComics comics={comicsData} />
        <h1>Eventos</h1>
        <ListaEventos 
          eventos={currentEvents} 
          currentPage={currentPage}
          eventsPerPage={eventsPerPage}
          totalEvents={eventsData.length}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Inicio;