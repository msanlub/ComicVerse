//import '../../sass/components/_listaEvento.sass';
import Evento from './Evento'
import Pagination from '../Pagination'

/**
 * Componente que muestra un listado de eventos obtenidos de la API.
 * Permite la paginación de eventos según la página actual y el número de eventos por página.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.eventos - Lista de eventos a mostrar.
 * @param {number} props.currentPage - La página actual seleccionada.
 * @param {number} props.eventsPerPage - Número de eventos por página.
 * @param {number} props.totalEvents - Total de eventos disponibles.
 * @param {function} props.onPageChange - Función que se llama al cambiar de página.
 *
 * @returns {JSX.Element} El componente renderizado que muestra la lista de eventos y la paginación.
 */
const ListaEventos = ({ eventos, currentPage, eventsPerPage, totalEvents, onPageChange }) => {
  
  return (
    <section className="container__listaEventos">
            {eventos.map((evento) => (
              <Evento 
                key={evento.id}
                titulo={evento.title}
                imagenEvento={`${evento.thumbnail.path}.${evento.thumbnail.extension}`}
                descripcion={evento.description}
              />
            ))}
          <Pagination
            currentPage={currentPage}
            itemsPerPage={eventsPerPage}
            totalItems={totalEvents}
            onPageChange={onPageChange}
          />
      </section>
  )
}

export default ListaEventos