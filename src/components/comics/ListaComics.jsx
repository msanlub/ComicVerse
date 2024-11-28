import Comic from './Comic'; 
//import '../../sass/components/_listaComic.sass';

/**
 * Componente que devuelve el listado de comics de la api
 * @param { comics } 
 * @returns lista de comics
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