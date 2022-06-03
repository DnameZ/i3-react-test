import React from 'react';

import './PaginationStyle.scss';


const Paginations = ({perPage,AllOfThem,curPage}) => {
  const SumPage = [];

  for (let index = 1; index <= Math.ceil(AllOfThem/perPage); index++) {
    SumPage.push(index);
  }

  const DetermineActiveState = (myPage) =>
  {
    if(myPage==curPage)
    {
      return "myli"
    }
    else
    {
      return "yoursli"
    }

  }

  
  return ( 
    <div className="ContainerForPagination">
      <ul className="pagination">
        {SumPage.map((page)=>(
          <li key={page} className={DetermineActiveState(page)} >
            {page}
          </li>
        ))}

      </ul>
    </div>
   );
}
 
export default Paginations;