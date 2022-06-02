import React from 'react';
import './DropDownStyle.scss';


const DrowDown = () => {
  return ( 
    <ul class="dropdown">
        <li><a href="#">2020 Anual Report</a>
            <ul>
                <li><a href="#">Anual Report Home</a></li>
                <li><a href="#">Page One</a></li>
                <li><a href="#">Page Two</a></li>
            </ul>
        </li>
    </ul>
   );
}
 
export default DrowDown;