import React from 'react';
import './Nav.scss';

import { Images } from '../../Assets/Lib/generalStyles';

import { useNavigate,useLocation } from 'react-router-dom';


import { NavDesktop } from '../../MockFolder/NavText';

const Navigation = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const GetActivePage=(targetedRoute,className) =>
  {
    if(location.pathname==targetedRoute)
      return className;
    else
      return "";
  }

  return ( 
    <nav>
      <a className={GetActivePage("/first","-first")} onClick={()=>navigate("/first")}>{NavDesktop.NavLinks.NavOne}</a>
      <a className={GetActivePage("/second","-second")} onClick={()=>navigate("/second")}>{NavDesktop.NavLinks.NavTwo}</a>
      <img src={Images.Logo} className='navlogo'/>
      <a>{NavDesktop.NavLinks.NavUndefied}</a>
      <a>{NavDesktop.NavLinks.NavUndefied}</a>
      <div className="animation start-home"></div>
   </nav>
   );
}
 
export default Navigation;