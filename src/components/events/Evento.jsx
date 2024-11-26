import '../../sass/components/_cardEvento.sass';

const Evento = ({id, titulo,descripcion, imagenEvento}) => {
  //console.log(titulo,descripcion)
  return (
    <section className='container__eventos'>
        <section className='evento__imagen' >
            <img src={imagenEvento} />
        </section>
        <section className='evento__info'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </section>
    </section>
  )
}

export default Evento