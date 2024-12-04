import Comic from './Comic'; 
//import '../../sass/components/_listaComic.sass';

/**
 * Componente que representa un listado de cómics obtenidos de la API.
 * 
 * Este componente recibe una lista de cómics y renderiza un componente `Comic`
 * para cada uno de ellos, mostrando su imagen y título.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.comics - Array de objetos de cómics, donde cada objeto contiene
 *                               información sobre un cómic (id, thumbnail, title).
 *
 * @returns {JSX.Element} El componente renderizado que muestra la lista de cómics.
 */
const ListaComics = ({ comics }) => {
  //console.log(comics)
    return (
      <section className="container__listaComics">
        <section className="listaComics">
          {comics.map((comic) => (
            <Comic 
              key={comic.id}
              id={comic.id}
              imagen={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              titulo={comic.title}
            />
          ))}
        </section>
      </section>
    );
};

export default ListaComics;