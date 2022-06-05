import React from 'react';

import './Card.scss';

const Card = ({percent,title}) => {
  return ( 
    <div className='content'>
      <div className=" content__card ">
        <img className= "card__img"/>
        <p className=" content__card__content " >{percent}</p>
      </div>
      <p className=" content__title ">{title}</p> 
    </div>
   );
}
 
export default Card;