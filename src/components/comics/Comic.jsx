//import '../../sass/components/_cardComic.sass';


/**
 * Componente card de cada comic
 * @param { id, imagen, titulo } 
 * @returns estructura de comic
 */
const Comic = ({ id, imagen, titulo}) => {
  //console.log( titulo, isbn , imagen)
  return (
    <section className='contenedor__comic'>
      <img className='comic__imagen' src={imagen} alt={`Portada de ${titulo}`} />
      <section className='comic__info'>
        <h1>{titulo}</h1>   
      </section>
    </section>
  );
};

export default Comic;