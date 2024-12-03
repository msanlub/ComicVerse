//import '../../sass/components/_cardComic.sass';

import { getAuth } from "firebase/auth";
import { useState } from "react";
import { addFavorite, removeFavorite } from "../../config/Firebase";
import FavoriteIcon from '@mui/icons-material/Favorite';


/**
 * Componente card de cada comic
 * @param { id, imagen, titulo } 
 * @returns estructura de comic
 */
const Comic = ({ id, imagen, titulo}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const handleFavoriteClick = () => {
    if (!user) {
        alert("Debes estar logueado para añadir a favoritos.");
        return;
    }

    if (isFavorite) {
        removeFavorite(user.uid, id);
    } else {
        addFavorite(user.uid, id);
    }
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
          style={{ cursor: 'pointer', color: isFavorite ? 'red' : 'gray' }} 
        />
      </section>
    </article>
  );
};

export default Comic;