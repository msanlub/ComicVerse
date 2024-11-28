import '../sass/components/_Pagination.sass';


/**
 * Devuelve el cálculo de las páginas y cuantos items van por página
 * @param { currentPage, itemsPerPage, totalItems, onPageChange } 
 * @returns 
 */
const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container__pagination">
      <ul className='pagination__list'>
        {pageNumbers.map(number => (
          <li key={number} className={`list__item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => onPageChange(number)} className="item__button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;