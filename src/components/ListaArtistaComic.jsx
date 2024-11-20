import ArtistaComic from "./ArtistaComic";


const ListaArtistaComic = ({comics}) => {
    console.log('Comics recibidos:', comics);
    return (
      <section className="lista-artistaComics-container">
        <section className="lista-artistaComics">
          {comics.map((comic) => (
            <ArtistaComic
              key={comic.id}
              nombre={comic.nombre}
            />
          ))}
        </section>
      </section>
    );
}

export default ListaArtistaComic