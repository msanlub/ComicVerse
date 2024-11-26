import Comic from './Comic'; 
import '../../sass/components/_listaComic.sass';


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