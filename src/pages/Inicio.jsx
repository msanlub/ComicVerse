import { useState, useEffect } from "react";
import ListaEventos from "../components/eventos/ListaEventos";
import ListaComics from "../components/ListaComics";

const Inicio = () => {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const apiKey = 'cee90f8ea5b8601ab4a8f5d0c12a47a2'; 

  useEffect(() => {
    const fetchComics = async () => {
        const res = await fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}`);
        const result = await res.json();

        setComicsData(result.data.results);
    };

    fetchComics(); 
  }, []); 

  useEffect(() => {
    const fetchEvents = async () => {
    const res = await fetch (`https://gateway.marvel.com:443/v1/public/events?apikey=${apiKey}`);
    const result = await res.json();

    setEventsData(result.data.results);
    }

    fetchEvents();
  }, []);

  if (!comicsData) return <p>Cargando cómics...</p>;
  if (!eventsData) return <p>Cargando eventos...</p>;


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
