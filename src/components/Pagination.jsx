import '../sass/components/_pagination.sass';
import flechaDcha from '../assets/flechaDcha.png';
import flechaIzda from '../assets/flechaIzda.png';

/**
 * Componente de paginación
 * @param { currentPage, itemsPerPage, totalItems, onPageChange } 
 * @returns 
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