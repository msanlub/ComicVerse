Este proyecto en la página principal utiliza la API de Marvel para obtener información sobre cómics y eventos generales.

La comunicación asíncrona se implementa mediante fetch async (para la petición de HTTP de manera asincrona al flujo de la app) y useEffect (controla cuando se hace la llamada a la api) en React.
## 🛠️ Funcionalidades Implementadas
- **Obtención asíncrona** de cómics y eventos desde la API de Marvel.
- **Paginación** de eventos (3 por página).
- Manejo de **estados de carga y errores**.
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