
import flecha from '../assets/flecha.png';


/**
 * Componente que muestra una flecha para permitir el desplazamiento suave hacia arriba en la página.
 * 
 * Este componente se renderiza solo si la prop `show` es verdadera. Al hacer clic en la flecha,
 * se desplaza suavemente hacia la parte superior de la página.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.show - Indica si la flecha debe ser visible o no.
 *
 * @returns {JSX.Element|null} El componente renderizado que muestra la flecha de desplazamiento
 * o null si `show` es falso.
 */
const FlechaScroll = ({ show }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <img 
      src={flecha} 
      className='scroll__flecha' 
      onClick={handleClick} 
      alt="scroll flecha"
    />
  );
};

export default FlechaScroll;