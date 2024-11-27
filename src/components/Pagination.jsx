
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
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;