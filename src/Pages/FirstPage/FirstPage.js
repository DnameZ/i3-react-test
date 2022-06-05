import React, {useState} from 'react';

import './FirstPageStyle.scss';

import { AllPercents } from '../../MockFolder/Percents';

import Navigation from '../../Components/Nav/Nav';
import Card from '../../Components/Card/Card';
import DrowDown from '../../Components/DropDownMenu/DropDownMenu';
import Paginations from '../../Components/Pagination/Pagination';

import { Images } from '../../Assets/Lib/generalStyles';

const FirstPage = () => {
  let [page,setPage] = useState(1);
  
  const percentsPerPage = 1;

  const indexLastPercent = page * percentsPerPage;
  const indexFirstPercent = indexLastPercent - percentsPerPage;
  const currentPercent = AllPercents.Percents.slice(indexFirstPercent,indexLastPercent);


  const Operations = {
    Plus:"+",
    Minus:"-"
  }

  const ChangePage = (operation)=>
  {
      switch (operation) {
        case Operations.Plus:
          if(page <= AllPercents.Percents.length-1)
           setPage(page+=1);
          else
            window.alert("No more items")     
        break;

        case Operations.Minus:
          if(page >= 2)
            setPage(page-1);
          else
            window.alert("No more items")
        break;

        default:
          break;
      }
    return page;
  }

  const SoftComponent = React.memo(Card);  


  return ( 
      <>
        <DrowDown curpage="Page One"/>
        <Navigation/>
          <div className = 'cardscontainer'>
            {AllPercents.Percents.map((percent)=>
              <SoftComponent key={percent} percent={percent.content} title={percent.Title} />
            )}
          </div>

          <div className = 'cardscontainermobile'>
            <img onClick={ ()=>ChangePage("-") } src={Images.ArrowL} className = 'cardscontainermobile__arrow' />
              {currentPercent.map((percent)=> 
                <SoftComponent key={percent} percent={percent.content} title={percent.Title} />
              )}   
            <img onClick={ ()=>ChangePage("+")} src={Images.ArrowR} className = 'cardscontainermobile__arrow' />
        </div>
        <Paginations perPage={percentsPerPage} AllOfThem ={ AllPercents.Percents.length } curPage={page} />       
      </>
   );
}
 
export default FirstPage;