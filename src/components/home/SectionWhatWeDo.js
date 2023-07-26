import React from 'react';
import { useDispatch } from 'react-redux';

import SiteContainer from "../../library/common/layouts/SiteContainer";

import { showContactForm } from '../../library/redux/actions';

const ASSET_IMG = process.env.REACT_APP_img_folder;

const SectionWhatWeDo = () => {

    const dispatch = useDispatch();

    const handleClickContactUs = () => {
        dispatch( showContactForm( true ) );
        Utilities.scrollToSection(`contact`);
    }

    const listHtml = <>
                <ListItems icon={`white-outline-circle-web-app.svg`} sectionId={`do-web-app`}>01 - Web App Development</ListItems>
                <ListItems icon={`white-outline-circle-mobile-app.svg`} sectionId={`do-mobile-app`}>02 - Mobile App Development</ListItems>
                <ListItems icon={`white-outline-circle-software.svg`} sectionId={`do-software`}>03 - Software Integration</ListItems>
                <ListItems icon={`white-outline-circle-custom-app.svg`} sectionId={`do-custom-software`}>04 - Custom Software Development </ListItems>
                <ListItems icon={`white-outline-circle-ui.svg`} sectionId={`do-ui`}>05 - UI / UX Design</ListItems>
            </>

    return(
        <section id="what-we-do" className='jazenet-what-we-do bg-theme-primary section-point'>
            <div className='section-content'>
                <SiteContainer className="py-5">
                    <div className='py-3 py-md-5'>

                        <div className='row py-lg-5'>
                            <div className='col-lg-6 text-center text-lg-start'>
                                <div className='col-11 col-md-9 col-lg-0 mx-auto'>
                                    <h3 className='fs-60 fs-md-50 fs-sm-45'>what we do</h3>
                                    <div className='fs-25 fs-md-26 fs-sm-25 mt-4 mt-md-5'>At Jazenet, we are passionate about software development, and we thrive on turning challenges into opportunities. Partner with us to unlock the true potential of technology for your business. From conceptualization to deployment and beyond, we’ll be by your side, providing expert guidance and support at every step of the journey.</div>

                                    <button type='button' className='btn-theme-dark col-8 col-md-4 col-lg-6 mx-auto mx-lg-0 mt-5' onClick={ () => handleClickContactUs() }>contact us</button>
                                </div>
                            </div>
                            <div className='col-lg-6 mt-5 mt-lg-0 pt-0 pt-md-4 pt-lg-0 ps-lg-0'>
                                <ul className='fs-22  fs-md-26 fs-sm-21 list-style-icon-2 text-end text-lg-start'>{listHtml}</ul>
    
                            </div>
                        </div>

                    </div>
                </SiteContainer>
            </div>
        </section>
    )
}

export default SectionWhatWeDo;


const ListItems = ( props ) => {
    return(
        <li className='py-0 p-md-1'><a href={`#${props.sectionId}`} className='py-3'><img src={`${ASSET_IMG}/icons/${props.icon}`} /><div className='ps-3'>{props.children}</div></a></li>
    );
}