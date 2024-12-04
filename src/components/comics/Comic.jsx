import { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comic = ({ id, imagen, titulo }) => {
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
    } else {
      favorites.push({ id, imagen, titulo }); 
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