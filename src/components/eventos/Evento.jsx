

const Evento = ({id, titulo,descripcion, imagenEvento}) => {
  //console.log(titulo,descripcion)
  return (
    <section className={`container-evento-${id}`}>
        <section className='img-evento' >
            <img src={imagenEvento} />
        </section>
        <section className='info-evento'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </section>
    </section>
  )
}

export default Evento