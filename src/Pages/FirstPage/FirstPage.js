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
  const [percentsPerPage] = useState(1);

  const indexLastPercent = page * percentsPerPage;
  const indexFirstPercent = indexLastPercent - percentsPerPage;
  const currentPercent = AllPercents.Percents.slice(indexFirstPercent,indexLastPercent);

  const ChangePage = (operation)=>
  {
      switch (operation) {
        case "+":
          setPage(page+=1);
        break;

        case "-":
          setPage(page-1);
        break;

        default:
          break;
      }
    return page;
  }

  const SoftComponent = React.memo(Card);  


  return ( 
      <>
        <DrowDown/>
        <Navigation/>
          <div className = 'CardsContainer'>
            <Card percent={"+ %3"} title="Organic Sales Growth" />
            <Card percent={"+ %13"} title="Core eps growth" />
            <Card percent={"+ %114"} title="Third One" />
          </div>

          <div className = 'CardsContainerMobile'>
            <img onClick={ ()=>ChangePage("-") } src={Images.ArrowL} className = 'CardsContainerMobile__Arrow' />
              {currentPercent.map((percent)=> 
                <SoftComponent key={percent} percent={percent.content} title={percent.Title} />
              )}   
            <img onClick={ ()=>ChangePage("+")} src={Images.ArrowR} className = 'CardsContainerMobile__Arrow' />
        </div>
        <Paginations perPage={percentsPerPage} AllOfThem ={ AllPercents.Percents.length } curPage={page} />
        
      </>
   );
}
 
export default FirstPage;