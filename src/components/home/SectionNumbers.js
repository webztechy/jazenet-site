import React from 'react';
import SiteContainer from "../../library/common/layouts/SiteContainer";

const ASSET_IMG = process.env.REACT_APP_img_folder;

const SectionNumbers = () => {
    return(
        <div className='jazenet-numbers'>
            
            <section id="do-web-app" className='section-content  bordered-bottom-grey section-point'>
                <SiteContainer className="py-5">
                    <ListItems title="Web app development" numbering="01." icon={`pink-circle-web-app.svg`}>Whether you need a simple website or a complex web application, we’ve got you covered. Our team can build responsive, user-friendly, and scalable web solutions that engage your customers and drive results.</ListItems>
                </SiteContainer>
            </section>

            <section id="do-mobile-app" className='section-content  bordered-bottom-grey section-point'>
                <SiteContainer className="py-5">
                    <ListItems title="Mobile app development"  numbering="02." icon={`pink-circle-mobile-app.svg`}>In today’s mobile-first world, having a powerful mobile app is essential. Our mobile development experts can create iOS and Android apps that provide seamless experiences and leverage the full potential of mobile technology.</ListItems>
                </SiteContainer>
            </section>

            <section id="do-software" className='section-content  bordered-bottom-grey section-point'>
                <SiteContainer className="py-5">
                    <ListItems title="Software Integration"  numbering="03." icon={`pink-circle-software.svg`}>Streamline your operations and enhance productivity with our software integration services. We can integrate your existing systems or third-party applications to ensure smooth data flow and optimize your business processes.</ListItems>
                </SiteContainer>
            </section>

            <section id="do-custom-software" className='section-content  bordered-bottom-grey section-point'>
                <SiteContainer className="py-5">
                    <ListItems title="Custom Software Development"  numbering="04." icon={`pink-circle-custom-app.svg`}>In today’s mobile-first world, having a powerful mobile app is essential. Our mobile development experts can create iOS and Android apps that provide seamless experiences and leverage the full potential of mobile technology.</ListItems>
                </SiteContainer>
            </section>

            <section id="do-ui" className='section-content  bordered-bottom-grey section-point'>
                <SiteContainer className="py-5">
                    <ListItems title="UI / UX Design"  numbering="05." icon={`pink-circle-ui.svg`}>Revamp your digital presence with our cutting-edge UI and UX design services, delivering seamless user experiences that captivate and convert visitors into loyal customers.</ListItems>
                </SiteContainer>
            </section>


        </div>
    )
}

export default SectionNumbers;


const ListItems = (props) => {
    return (
        <>
            <div className='section-main-icon d-none d-lg-flex'><img src={`${ASSET_IMG}/icons/${props.icon}`} /></div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="pt-0 pt-md-5"></div>
                    <div className='d-lg-none'>
                        <div className='numbering position-relative d-flex align-items-center justify-content-between  justify-content-md-center pb-0 pb-md-5'>
                            <div className='number-item'>{props.numbering}</div>
                            <img src={`${ASSET_IMG}/icons/${props.icon}`} />
                        </div>
                    </div>
                    <h3 className="font-poppins-bold fs-18 fs-md-20">{props.title}</h3>
                    <div className="my-4">
                        <div className="heading-bordered"></div>
                    </div>
                    <div className=" text-grey">{props.children}</div>
                    <div className="pt-3 pt-md-5"></div>

                    <div className='pb-lg-5'></div>
                    <div className='pb-lg-5'></div>
                </div>

                <div className='col-lg-6 position-relative d-none d-lg-flex align-items-end numbering-col'>
                    <div className='number-letter line-height-0 pb-2'>{props.numbering}</div>
                </div>
                
            </div>
        </>
    )
}