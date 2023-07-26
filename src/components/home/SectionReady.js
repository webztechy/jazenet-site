import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SiteContainer from "../../library/common/layouts/SiteContainer";
import ContactForm from '../../library/common/components/ContactForm';

import { showContactForm } from '../../library/redux/actions';
import Utilities from '../../library/helpers/Utilities';

const ASSET_IMG = process.env.REACT_APP_img_folder;

const SectionReady = () => {

    const dispatch = useDispatch();

    const showContactFormAction = useSelector( state => state.showContactForm);

    const [ showContactFormComponent, setShowContactFormComponent ] = useState(false);
    const [ style, setStyle ] = useState({});

    const handleClickContactUs = () => {
        dispatch( showContactForm( !showContactFormComponent ) );
        setTimeout( () => {
            Utilities.scrollToSection(`contact`);
        }, 200);
        
    }

    useEffect( () => {

        setShowContactFormComponent(showContactFormAction);
        
        const styleTemp = showContactFormAction ? {...style, height: 'inherit'} : {};
        setStyle(styleTemp);

    }, [showContactFormAction] );

    return(
        <section id="contact" className='jazenet-ready bordered-bottom-grey section-point position-relative z-index-1 bg-theme-black'>
            <div className='section-content' style={style}>
                <SiteContainer className="d-md-flex align-items-center justify-content-center py-5">
                    <div>

                        <div className='pt-3 pt-md-5'></div>
                        <div className='font-poppins-regular fs-40 fs-md-32 fs-sm-30 text-center px-md-5 mx-md-5 '>Are you ready to take your business to new heights with innovative software solutions? Get in touch with us today for a consultation, and let’s embark on this transformative journey together.</div>

                        <div className='pt-5'></div>

                        {
                            !showContactFormComponent &&
                            <>
                                <button type='button' className='btn-theme-primary col-8 col-md-3 col-lg-2 mx-auto' onClick={ () => handleClickContactUs() }>contact us</button>

                                <div className='pt-5'></div>
                                <div className='text-theme-primary font-poppins-bold fs-20 fs-md-22 fs-sm-22 text-center px-5'>Empowering Innovation, Crafting Excellence</div>
                                <div className='pt-5  pt-lg-5'></div>
                            </>
                        }
                       


                        {
                            showContactFormComponent && 
                            <div className='col-lg-7 mx-auto bg-white text-theme-black contact-content mb-5'>
                                <div className='col-11 col-md-10 mx-auto pt-2 pb-5'>
                                    <div className='pt-1 pt-md-4 d-flex justify-content-end'><img src={`${ASSET_IMG}/icons/black-outline-cross-border.svg`} className='cursor-pointer' onClick={ () => handleClickContactUs() } /></div>
                                    <h3 className='font-montserrat-bold fs-40 text-center text-lg-start'>contact</h3>
                                    <ContactForm />
                                </div>
                            </div>
                        }
                       

                    </div>
                </SiteContainer>
            </div>
        </section>
    )
}

export default SectionReady;

