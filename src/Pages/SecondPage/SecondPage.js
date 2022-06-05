import React from 'react';

import { Images } from '../../Assets/Lib/generalStyles';

import DrowDown from '../../Components/DropDownMenu/DropDownMenu';
import Navigation from '../../Components/Nav/Nav';
import ImageScrollAnimation from '../../Components/ImageScrollAnimation/ImageScrollAnimation';


import { SecondPageContent } from '../../MockFolder/SecondPage';

import './SecondPage.scss';

const SecondPage = () => {
  let style = {
    width:"80%",
    height:"50%",
  };

  return (  
    <>
      <DrowDown curpage="Page Two"/>
      <Navigation/>

      <div className='content'>
        <h3 className='content__title'>{SecondPageContent.Content.title}</h3>

        <div className='content__picturecontainer'>
          <img src={Images.Good} className='content__picturecontainer_picture'/>
        </div>

        <p className='content__content'>
          {SecondPageContent.Content.content}
        </p>
        <p className='content__content'>
          {SecondPageContent.Content.contentContinue}
        </p>

        <div className='content__pictureformat'>
          <div className='content__pictureformat_pictures'>
            <ImageScrollAnimation src={Images.Potion}/>
            <ImageScrollAnimation src={Images.Potion}/>
          </div>
          <div className='content__pictureformat_content'>
            <p>{SecondPageContent.Content.contentFirstCard}</p>
            <p>{SecondPageContent.Content.contentSecondCard}</p>
          </div>         
        </div>
      </div>

      <div className='content__pictureformatbig'>
          <img style={style} src={Images.Good} className='content__picturecontainer_picture'/>
      </div>
    </>
  );
}
 
export default SecondPage;