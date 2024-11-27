Este proyecto en la página principal utiliza la API de Marvel para obtener información sobre cómics y eventos generales.

La comunicación asíncrona se implementa mediante fetch async (para la petición de HTTP de manera asincrona al flujo de la app) y useEffect (controla cuando se hace la llamada a la api) en React.
## 🛠️ Funcionalidades Implementadas
- **Obtención asíncrona** de cómics y eventos desde la API de Marvel.

```js
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
```
- **Paginación** de eventos (3 por página).

```js
    // paginación y eventos por pagina
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

    // Calcular los índices de los eventos a mostrar por pagina
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.length > 0 ? eventsData.slice(indexOfFirstEvent, indexOfLastEvent) : [];

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
```

[Componente de paginación](/src/components/Pagination.jsx)

- Manejo de **estados de carga y errores**.

```js
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


    //...Fetch api


   // mientras carga y si hay error en cada una de las llamadas a la api
  if (loading) return <p>Cargando los mejores comics...</p>;
  if (error) return <p>Error: {error}</p>;

```

## 🔄 Proceso de Comunicación Asíncrona
Al cargar el componente, se inician las llamadas a la API mediante useEffect.

Durante la carga, se muestra un mensaje "Cargando los mejores comics...".

![](/src/assets/imgProyecto/img_cargando.png)


Los datos recibidos se almacenan en los estados comicsData y eventsData.

La interfaz se actualiza para mostrar los datos obtenidos.

![Listado de comics](/src/assets/imgProyecto/img_comics.png)

![Paginación de eventos](/src/assets/imgProyecto/img_eventos_paginacion.png)

En caso de error, se muestra un mensaje de error.

![Paginación de eventos](/src/assets/imgProyecto/img_error.png)