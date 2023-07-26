import React, { useEffect } from 'react';
import jQuery from 'jquery';

import SectionJazenet from './home/SectionJazenet';
import SectionUnlock from './home/SectionUnlock';
import SectionUnlockItems from './home/SectionUnlockItems';
import SectionRevolution from './home/SectionRevolution';
import SectionReady from './home/SectionReady';
import SectionWhatWeDo from './home/SectionWhatWeDo.js';
import SectionNumbers from './home/SectionNumbers';
import Utilities from '../library/helpers/Utilities';

const ASSET_IMG = process.env.REACT_APP_img_folder;


const Home = () => {

    const windowBrowser = jQuery(window);
    
    const handleClickArrowDown = () => {
      Utilities.scrollToNextSection();
    }
    
    const handleClickArrowTop = () => {
      Utilities.scrollToSection('jazenet');
    }

    useEffect( () => {

      windowBrowser.on('scroll', function () {
        const scrollToTopBtn = jQuery('.floating-arrow-up-nav');
        const currentScroll  = window.pageYOffset || document.documentElement.scrollTop;
        const bodyHeight = Utilities.getPageHeight()-((window.innerHeight*2)-(window.innerHeight/2)); 
        //const bodyHeight = Utilities.getPageHeight()-(window.innerHeight*2);

        if ( currentScroll>bodyHeight ){
          scrollToTopBtn.removeClass('d-none');
        }else{
          scrollToTopBtn.addClass('d-none');
        }
       
    });


    }, [] );


    return (
      <>
        <SectionJazenet />
        <SectionUnlock />
        <SectionUnlockItems />
        <SectionRevolution />
        <SectionWhatWeDo />
        <SectionNumbers />
        <SectionReady />

        <button type="button" className='floating-arrow-down-nav'><img src={`${ASSET_IMG}/icons/pink-circle-arrow-down.svg`} className='circle-arrow-down' onClick={ () => handleClickArrowDown() }/></button>
        <button type="button" className='floating-arrow-up-nav d-none'><img src={`${ASSET_IMG}/icons/pink-circle-arrow-down.svg`} className='circle-arrow-down' onClick={ () => handleClickArrowTop() }/></button>

      </>
    
    );
};

export default Home;