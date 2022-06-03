import React from 'react';
import './Nav.scss';

import { useNavigate } from 'react-router-dom';

const Navigation = () => {

  const navigate = useNavigate();
  return ( 
    <nav>
      <a onClick={()=>navigate("/first")}>First Page</a>
      <a onClick={()=>navigate("/second")}>Second Page</a>
      <a>Some Page</a>
      <a>Some Page</a>
      <a>Some Page</a>
      <div class="animation start-home"></div>
   </nav>
   );
}
 
export default Navigation;