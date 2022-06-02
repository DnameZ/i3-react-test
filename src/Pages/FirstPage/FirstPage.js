import React from 'react';

import './FirstPageStyle.scss';

import Navigation from '../../Components/Nav/Nav';
import Card from '../../Components/Card/Card';
import DrowDown from '../../Components/DropDownMenu/DropDownMenu';


import { Images } from '../../Assets/Lib/generalStyles';

const FirstPage = () => {
  return ( 
      <>
        <DrowDown/>
        <Navigation/>
        <div className='CardsContainer'>
          <Card percent={"%3"} title="JA" />
          <Card percent={"%3"} title="JA" />
          <Card percent={"%3"} title="JA" />
        </div>

        <div className='CardsContainerMobile'>
          <img src={Images.ArrowL} className='CardsContainerMobile__Arrow' />
          <Card percent={"%3"} title="JA" />
          <img src={Images.ArrowR} className='CardsContainerMobile__Arrow' />
        </div>
        
      </>
   );
}
 
export default FirstPage;