import Evento from './Evento'
import "../../css/components/ListaEventos.css"

const ListaEventos = ({eventos}) => {
    //console.log('eventos recibidos: ', eventos);
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
        </section>
      </section>
  )
}

export default ListaEventos