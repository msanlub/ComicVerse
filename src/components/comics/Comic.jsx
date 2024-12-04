import { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * Componente que muestra la información de un cómic y maneja los cómics favoritos.
 *
 * Este componente permite a los usuarios ver la portada de un cómic, su título,
 * y gestionar la adición o eliminación del cómic de su lista de favoritos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - ID del cómic.
 * @param {string} props.imagen - URL de la imagen del cómic con extensión.
 * @param {string} props.titulo - Título del cómic.
 * @param {function} props.onRemove - Función que se llama al eliminar un cómic de favoritos.
 *
 * @returns {JSX.Element} El componente renderizado que muestra la información del cómic.
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