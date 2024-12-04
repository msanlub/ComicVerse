
import flecha from '../assets/flecha.png';
import '../sass/components/_flechaScroll.sass';

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