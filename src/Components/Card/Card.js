import React from 'react';

import './Card.scss';

const Card = ({percent,title}) => {
  return ( 
    <div className='Content'>
      <div className="Content__Card">
        <img className="Content__Card__img"/>
        <p className="Content__Card__content" >{percent}</p>
      </div>
      <p className="Content__title">{title}</p> 
    </div>
   );
}
 
export default Card;