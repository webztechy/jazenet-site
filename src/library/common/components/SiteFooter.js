import React from 'react';

import SiteContainer from '../layouts/SiteContainer';

const ASSET_IMG = process.env.REACT_APP_img_folder;
const SITE_TITLE = process.env.REACT_APP_site_title; 

const SiteFooter = ( props ) => {

    return (
        <div className='footer position-relative z-index-1 bg-theme-black'>
            <div className='bordered-bottom-grey'>
                <SiteContainer className="py-5">
                    <div className='row'>
                        <div className='col-lg-6  d-flex align-items-center justify-content-center justify-content-lg-start'>
                             <a href="#" className='mb-4 mb-lg-0'><img src={`${ASSET_IMG}/logo/jazenet-logo.svg`} className='jazenet-logo-footer'/></a>
                        </div>
                        <div className='col-lg-6'>
                            <ul className='fs-18 fs-md-17 fs-sm-19 d-flex align-items-center justify-content-center justify-content-lg-end'>
                                <li><a href="#" className='mx-4 mx-sm-5'>home</a></li>
                                <li><a href="#unlock" className='mx-4 mx-sm-5'>about</a></li>
                                <li><a href="#contact" className='mx-4 mx-sm-5'>contact</a></li>
                            </ul>
                        </div>
                    </div>
                </SiteContainer>
            </div>

            <div>
                <SiteContainer className="py-4">
                    <div className='text-center fs-13 fs-md-12'>&copy; {  new Date().getFullYear() } {SITE_TITLE}. All rights reserved.</div>
                </SiteContainer>
            </div>
        </div>
       
    )
}
export default SiteFooter;