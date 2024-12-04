import deadpoolYLobezno from '../assets/galeriaInicio/deadpoolYLobezno.jpg';
import gwenPool from '../assets/galeriaInicio/gwenPool.jpg';
import hulk from '../assets/galeriaInicio/hulk.jpg';
import mistica from '../assets/galeriaInicio/mistica.jpg';
import scarletWitch from '../assets/galeriaInicio/scarletWitch.jpg';

/**
 * Componente de galería de imágenes que muestra una colección de imágenes de personajes.
 * 
 * Este componente renderiza una serie de imágenes en un formato de galería,
 * utilizando un array para almacenar las rutas de las imágenes y el método `map`
 * para iterar sobre ellas y generar elementos de imagen.
 *
 * @returns {JSX.Element} El componente renderizado que muestra una galería de imágenes.
 */
const GaleriaImagenes = () => {
  const imagenes = [
     gwenPool, hulk, deadpoolYLobezno, mistica, scarletWitch
  ];

  return (
    <section className="container__galeria">
        {imagenes.map((imagen, index) => (
          <article key={index} className="galeria__card">
            <img src={imagen} alt={`Imagen ${index + 1}`} />
          </article>
        ))}
    </section>
  );
}

export default GaleriaImagenes;
