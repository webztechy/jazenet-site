import React from 'react';
import { useDispatch } from 'react-redux';

import SiteContainer from '../../library/common/layouts/SiteContainer';

import { showContactForm } from '../../library/redux/actions';
import Utilities from '../../library/helpers/Utilities';

const SectionUnlock = () => {

    const dispatch = useDispatch();

    const handleClickContactUs = () => {
        dispatch( showContactForm( true ) );
        Utilities.scrollToSection(`contact`);
    }

    return(
        <section id="unlock" className='jazenet-unlock bordered-top-grey section-point bg-theme-black'>
            <div className='section-content'>
                <SiteContainer className="d-flex align-items-center justify-content-center position-relative  py-5 text-center text-lg-start">
                    <div className='row py-3 py-md-5'>
                        <div className='col-lg-7 fs-40 fs-md-32 fs-sm-30 line-height-1-3 pb-5 pl-lg-0'>
                             Unlock the full potential<br className='d-sm-none' /> of your<br className='d-none d-sm-inline d-lg-none' /> business with cutting-edge software solutions designed and crafted by our<br className='d-none d-sm-inline d-lg-none' /> team of expert developers.
                        </div>
                        <div className='col-lg-5 fs-18 fs-md-18 d-flex justify-content-lg-end pb-5 pl-lg-0'>
                            <div className='col-10 col-lg-8 ps-lg-2 text-grey mx-auto mx-lg-0'>
                                At Jazenet, we believe that innovation and technology can transform businesses and revolutionize industries. That’s why<br className='d-none d-lg-inline' />we’re committed to providing you with top-notch software development services tailored to your unique needs.
                            </div>
                        
                        </div>
                        <button type='button' className='btn-theme-primary col-6 col-md-3 col-lg-2 mx-auto mx-lg-0'  onClick={ () => handleClickContactUs() }>contact us</button>
                    </div>

                   
                </SiteContainer>
            </div>
        </section>
    )
}

export default SectionUnlock;