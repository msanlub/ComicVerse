import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import ListaComics from '../components/comics/ListaComics'; 


const Usuario = () => {
  const [userName, setUserName] = useState('');
    const [favoriteComics, setFavoriteComics] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || user.email);

            // Obtener los cómics favoritos del usuario
            const db = getDatabase();
            const favoritesRef = ref(db, `usuarios/${user.uid}/favoritos`);
            onValue(favoritesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    // Convertir el objeto en un array
                    const comicsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key], 
                    }));
                    setFavoriteComics(comicsArray);
                } else {
                    setFavoriteComics([]); 
                }
            });
        }
    }, [user]);

    return (
        <div>
            <h1>Bienvenido, {userName}</h1>
            <h2>Mis Cómics Favoritos</h2>
            <ListaComics comics={favoriteComics} />
        </div>
    );
}

export default Usuario

