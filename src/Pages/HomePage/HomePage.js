import React from 'react';

import Navigation from '../../Components/Nav/Nav';
import DrowDown from '../../Components/DropDownMenu/DropDownMenu';

const HomePage = () => {
  return ( 
    <>
      <DrowDown curpage="Anual Report Home"/>
      <Navigation/>
    </>

   );
}
 
export default HomePage;