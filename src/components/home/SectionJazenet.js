import React from 'react';
import SiteContainer from '../../library/common/layouts/SiteContainer';
import Utilities from '../../library/helpers/Utilities';

const ASSET_IMG = process.env.REACT_APP_img_folder;

const SectionJazenet = ( props ) => {

    const handleClickArrow = () => {
        Utilities.scrollToSection(`unlock`);
    }

    const htmlArrowDown = <button type="button"><img src={`${ASSET_IMG}/icons/pink-circle-arrow-down.svg`} className='circle-arrow-down' onClick={ () => handleClickArrow() }/></button>

    return (
        <section id="jazenet" className='jazenet-info bordered-top-grey section-point position-relative z-index-1'>

            <div className='section-content'>
                <SiteContainer className="d-flex align-items-end justify-content-center text-center position-relative  pt-5 pb-4 pb-md-5">

                    <div className='font-poppins-medium fs-70  fs-md-50  fs-sm-35  line-height-1-3 w-100'>

                        <a href="#"><img src={`${ASSET_IMG}/logo/jazenet-logo.svg`} className='jazenet-logo'/></a>
                        <div className='mt-4 mt-sm-5 pt-0 pt-sm-2 mb-4 mt-mb-5 pb-0 pb-sm-4 '>your partner in<br className='d-lg-none'/> software<br className='d-md-none'/><br className='d-none d-lg-inline'/> development</div>

                        <div className='d-none d-md-block'>
                            { htmlArrowDown }

                            <div className='pb-3 pb-sm-5 mb-0 mb-sm-5'></div>
                            <div className='pb-0 pb-sm-4'></div>

                        </div>

                        <div className='py-2 py-md-0'></div>
                       
                        <ul className='font-poppins-medium fs-16  fs-md-16 list-style-icon-1'>
                            <ListItems icon={`white-outline-web-app.svg`} sectionId={`do-web-app`}>Web App Development</ListItems>
                            <ListItems icon={`white-outline-mobile-app.svg`} sectionId={`do-mobile-app`}>Mobile App Development</ListItems>
                            <ListItems icon={`white-outline-software.svg`} sectionId={`do-software`}>Software Integration</ListItems>
                            <ListItems icon={`white-outline-custom-app.svg`} sectionId={`do-custom-software`}>Custom Software Development </ListItems>
                            <ListItems icon={`white-outline-ui.svg`} sectionId={`do-ui`}>UI / UX Design</ListItems>
                        </ul>

                        <div className='d-flex align-items-center justify-content-end d-sm-none pt-4'>
                            { htmlArrowDown }
                        </div>
                        <div className='pb-0 pb-sm-5'></div>
                    </div>

                </SiteContainer>
            </div>
           
        </section>
       
    )
}
export default SectionJazenet;


const ListItems = ( props ) => {

    const scrollTo = ( keyName = "" ) => {
        if ( keyName!=="" ){
            Utilities.scrollToSection(keyName);
        }
    }

    return(
        <li className='py-2 py-md-0  py-lg-2 px-md-4 cursor-pointer' onClick={ () => scrollTo(props.sectionId) }><img src={`${ASSET_IMG}/icons/${props.icon}`}/><div className='mt-md-3'>{props.children}</div></li>
    );
}