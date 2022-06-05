import React from 'react';
import './DropDownStyle.scss';

import { useNavigate } from 'react-router-dom';

import { NavMobile } from '../../MockFolder/NavText';

const DrowDown = ({curpage}) => {
    const navigate = useNavigate();

  return ( 
    <ul class="dropdown">
        <li><a href="#">{curpage}</a>
            <ul>
                <li onClick={()=>navigate("/")}><a href="#">{NavMobile.NavLinks.AnnualReport}</a></li>
                <li onClick={()=>navigate("/first")}><a href="#">{NavMobile.NavLinks.NavOne}</a></li>
                <li onClick={()=>navigate("/second")}><a href="#">{NavMobile.NavLinks.NavTwo}</a></li>
            </ul>
        </li>
    </ul>
   );
}
 
export default DrowDown;