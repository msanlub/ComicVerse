//import '../../sass/components/_cardEvento.sass';

/**
 * Componente card de cada evento
 * @param { id, titulo,descripcion, imagenEvento } 
 * @returns estructura de evento
 */
const Evento = ({id, titulo,descripcion, imagenEvento}) => {
  //console.log(titulo,descripcion)
  return (
    <article className='card__evento'>
      <img  className='evento__imagen'  src={imagenEvento} />
        <section className='evento__info'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </section>
    </article>
  )
}

export default Evento