//import '../../sass/components/_cardEvento.sass';

/**
 * Componente que representa una tarjeta de evento.
 * 
 * Este componente muestra la información de un evento, incluyendo su título,
 * descripción e imagen asociada. Se utiliza para presentar eventos en una
 * lista o galería.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - Identificador único del evento.
 * @param {string} props.titulo - Título del evento.
 * @param {string} props.descripcion - Descripción del evento.
 * @param {string} props.imagenEvento - URL de la imagen del evento.
 *
 * @returns {JSX.Element} El componente renderizado que muestra la tarjeta del evento.
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