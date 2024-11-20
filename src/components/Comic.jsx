import '../styles/Comic.css';

const Comic = ({ id, imagen, titulo, isbn }) => {
  //console.log( titulo, isbn , imagen)
  return (
    <section className={`contenedor-comic-${id}`}>
      <section className='imagenComic'>
        <img src={imagen} alt={`Portada de ${titulo}`} />
      </section>
      <section className='infoComic'>
        <h1>{titulo}</h1>
        <h3>ISBN: {isbn}</h3>    
      </section>
    </section>
  );
};

export default Comic;