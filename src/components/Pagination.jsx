
import flechaDcha from '../assets/flechaDcha.png';
import flechaIzda from '../assets/flechaIzda.png';

/**
 * Componente de paginación que permite navegar entre páginas de elementos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.currentPage - La página actual seleccionada.
 * @param {number} props.itemsPerPage - Número de elementos por página.
 * @param {number} props.totalItems - Total de elementos disponibles.
 * @param {function} props.onPageChange - Función que se llama al cambiar de página.
 *
 * @returns {JSX.Element} El componente de paginación renderizado.
 */
const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav className="container__pagination">
      <ul className='pagination__list'>
        <li className='list__item'>
          <img 
            src={flechaIzda} 
            className='flecha' 
            onClick={() => onPageChange('prev')} 
            alt="flecha anterior"
            style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }} // Cambia el cursor
          />
        </li>
        
        <li className='list__item'>
          <span className="item__numero">{currentPage} / {totalPages}</span> {/* Muestra la página actual */}
        </li>

        <li className='list__item'>
          <img 
            src={flechaDcha} 
            className='flecha' 
            onClick={() => onPageChange('next')} 
            alt="flecha siguiente"
            style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }} // Cambia el cursor
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;