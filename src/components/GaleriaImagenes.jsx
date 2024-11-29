import deadpoolYLobezno from '../assets/galeriaInicio/deadpoolYLobezno.jpg';
import gwenPool from '../assets/galeriaInicio/gwenPool.jpg';
import hulk from '../assets/galeriaInicio/hulk.jpg';
import mistica from '../assets/galeriaInicio/mistica.jpg';
import scarletWitch from '../assets/galeriaInicio/scarletWitch.jpg';

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
