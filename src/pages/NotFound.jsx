
import { Link,useRouteError } from 'react-router-dom';
import notFoundImage from '../assets/notFoundDef.png';

const NotFound = () => {
  const error = useRouteError()
  return (
    <div>NotFound
      <p>{error.message}</p>
      <p>{error.statusText}</p>
      <img src={notFoundImage} alt="Not Found" />
      <Link to = "/">Volver al inicio</Link>
    </div>
  )
}

export default NotFound