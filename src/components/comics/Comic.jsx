import { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * Componente que muestra la información de un cómic y manejo de comics favoritos
 * @param {id} id del comic
 * @param {imagen} imagen del comic con extension
 * @param {titulo} titulo del comic
 * @param {onRemove} funcion en respuesta a la eliminación de un comic de favoritos
 * @returns 
 */
const Comic = ({ id, imagen, titulo, onRemove }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthorized(!!user);
      if (user) {
        const favorites = JSON.parse(localStorage.getItem(`favorites_${user.uid}`)) || [];
        setIsFavorite(favorites.some(fav => fav.id === id)); // Verifica si el comic esta en favoritos
      }
    });

    return () => unsubscribe();
  }, [auth, id]);

  const handleFavoriteClick = () => {
    if (!isAuthorized) {
      alert("Debes iniciar sesión para añadir a favoritos.");
      return;
    }

    const userId = auth.currentUser.uid;
    let favorites = JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
    
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== id); 
      console.log("Eliminado de favoritos");
      onRemove(id);
    } else {
      favorites.push({ id, imagen, titulo });
      console.log("Agregado a favoritos");
    }

    localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <article className='contenedor__comic'>
      <img className='comic__imagen' src={imagen} alt={`Portada de ${titulo}`} />
      <section className='comic__info'>
        <h1 className="info__titulo">{titulo}</h1>   
        <FavoriteIcon 
          onClick={handleFavoriteClick} 
          className="info__favorito"
          style={{ 
            cursor: isAuthorized ? 'pointer' : 'not-allowed', 
            color: isFavorite ? 'red' : 'gray' 
          }} 
        />
      </section>
    </article>
  );
};

export default Comic;