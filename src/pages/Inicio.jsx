import { useState, useEffect } from "react";
import ListaEventos from "../components/eventos/ListaEventos";
import ListaComics from "../components/ListaComics";

const Inicio = () => {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = 'cee90f8ea5b8601ab4a8f5d0c12a47a2'; 

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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>Inicio</div>
      <p>Imágenes</p>
      <div>Filtros de búsqueda</div>
      <div>
        <h1>Cómics</h1>
        <ListaComics comics={comicsData} />
        <h1>Eventos</h1>
        <ListaEventos eventos={eventsData} />
      </div>
    </div>
  );
};

export default Inicio;