import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getDatabase, ref, onValue } from "firebase/database";
import Comic from '../components/comics/Comic'; 
import Pagination from '../components/Pagination'; 

const Usuario = () => {
  const [userName, setUserName] = useState('');
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 4; 

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser.uid);
        setUserName(currentUser.displayName || currentUser.email);
        
        // Cargar los cómics favoritos desde localStorage
        const favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.uid}`)) || [];
        
        // Si hay favoritos en localStorage, actualiza el estado
        if (favorites.length > 0) {
          setFavoriteComics(favorites);
        } else {
          setFavoriteComics([]);
        }
      } else {
        setUser(null);
        setUserName('');
        setFavoriteComics([]);
      }
    });
    // limpiea
    return () => unsubscribe();
  }, [auth]);

  // Calcular los índices de los cómics a mostrar por página
  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComics = favoriteComics.slice(indexOfFirstComic, indexOfLastComic);

  // Total de páginas
  const totalPages = Math.ceil(favoriteComics.length / comicsPerPage);

  // Función para cambiar de página
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    } else if (typeof direction === 'number') {
      setCurrentPage(direction);
    }
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Bienvenido, {userName}</h1>
      <h2>Mis Cómics Favoritos</h2>
      
      {currentComics.length > 0 ? (
        <>
          <div className="lista-comic">
            {currentComics.map(comic => (
              <Comic 
                key={comic.id}
                id={comic.id}
                imagen={comic.imagen} 
                titulo={comic.titulo} 
              />
            ))}
          </div>
          <Pagination 
            currentPage={currentPage} 
            itemsPerPage={comicsPerPage} 
            totalItems={favoriteComics.length} 
            onPageChange={handlePageChange} 
          />
        </>
      ) : (
        <p>No tienes cómics favoritos.</p>
      )}
    </div>
  );
}

export default Usuario;