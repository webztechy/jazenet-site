import React from 'react';

import SiteContainer from '../layouts/SiteContainer';

const SiteHeader = ( props ) => {

    return (
        <header className='header'>
            <SiteContainer>
                <nav className='main-nav d-flex align-items-center justify-content-center py-2'>
                    <ul className='fs-17 d-flex align-items-center'>
                        <li><a href="#home" className='mx-4 mx-sm-5'>home</a></li>
                        <li><a href="#unlock" className='mx-4 mx-sm-5'>about</a></li>
                        <li><a href="#contact" className='mx-4 mx-sm-5'>contact</a></li>
                    </ul>
                </nav>
            </SiteContainer>
        </header>
       
    )
}
export default SiteHeader;