import imagenComic from '../assets/comicgwen.jpg'; 

const ArtistaComic = ({idArtista, nombreComic}) => {
  return (
    <section className='contenedor-imagenComicArtista'>
        <img src={imagenComic} alt={`Portada de ${nombreComic}`} />
    </section>
  )
}

export default ArtistaComic