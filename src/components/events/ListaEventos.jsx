import '../../sass/components/_listaEvento.sass';
import Evento from './Evento'

import Pagination from '../Pagination'

const ListaEventos = ({ eventos, currentPage, eventsPerPage, totalEvents, onPageChange }) => {
  return (
    <section className="container__listaEventos">
        <section className="listaEventos">
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