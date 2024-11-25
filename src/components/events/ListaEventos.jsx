import Evento from './Evento'
import "../../css/components/ListaEventos.css"
import Pagination from '../Pagination'

const ListaEventos = ({ eventos, currentPage, eventsPerPage, totalEvents, onPageChange }) => {
  return (
    <section className="lista-eventos-container">
        <section className="lista-eventos">
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
      </section>
  )
}

export default ListaEventos