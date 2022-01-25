import React from 'react';
import _ from 'lodash';
import PropType from 'prop-types';

const Pagination= props =>{ 
    const {itemsCount,pageSize, onPageChange, currentPage} = props;
    const pagesCount= Math.ceil(itemsCount/pageSize);
    // console.log(pagesCount);
    if(pagesCount === 1) return null;
    const pages= _.range(1,pagesCount+1)
    // console.log(pages)

    return (
            <nav>
  <ul className="pagination">
      {pages.map(page=>(
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}><a href="#/" onClick={()=>onPageChange(page)} className="page-link" >{page}</a></li>
      ))}
  </ul>
</nav>
    );
}

Pagination.propTypes ={
    itemsCount : PropType.number.isRequired,
    pageSize : PropType.number.isRequired,
    currentPage : PropType.number.isRequired,
    onPageChange: PropType.func.isRequired,
}

export default Pagination;