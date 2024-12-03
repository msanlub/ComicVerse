import { Link } from 'react-router-dom';
import notFoundImage from '../assets/notFoundDef.png';

/**
 * Página de error notFound
 * @returns imágen notFound
 */
const NotFound = () => {
  return (
    <div>
      <h1>Pagina No Encontrada</h1>
      <img src={notFoundImage} alt="Not Found" />
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;