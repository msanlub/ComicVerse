//import '../../sass/components/_listaEvento.sass';
import Evento from './Evento'
import Pagination from '../Pagination'

/**
 * Componente que devuelve el listado de eventos de la api según las páginas y cuántos eventos por página
 * @param { eventos, currentPage, eventsPerPage, totalEvents, onPageChange } 
 * @returns 
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