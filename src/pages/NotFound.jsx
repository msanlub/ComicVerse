import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import notFoundImage from '../assets/notFoundDef.png';
import pantallaRota from '../assets/pantallaRota.png';
import martilloThor from '../assets/icons/icono-thor.png';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.pantallaRota').style.opacity = '1';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notFound">
      <img className="notFoundImage" src={notFoundImage} alt="Not Found" />
      <img className="martillo" src={martilloThor} alt="Martillo" />
      <img className="pantallaRota" src={pantallaRota} alt="Pantalla rota" />
      <Link className="link" to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
