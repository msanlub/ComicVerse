import Comic from './Comic'; 
import '../styles/ListaComics.css';

const ListaComics = ({ comics }) => {
  //console.log(comics)
    return (
      <section className="lista-comics-container">
        <section className="lista-comics">
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