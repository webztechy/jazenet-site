import React from "react";

const SectionUnlockItems = () => {
    return(
        <section id="unlock-items" className='jazenet-unlock-items bordered-top-grey section-point'>
            <div className='section-content'>

                    <ul className="list-style-labelled-1 fs-18 fs-md-18 text-center text-md-start">
                        <ListItems title="Experienced Team">Our team comprises seasoned developers, designers, and project managers who have successfully delivered a myriad of projects across various industries. With their diverse expertise and deep understanding of the latest technologies, you can be confident that your project is in capable hands.</ListItems>
                        
                        <ListItems title="Custom Solutions">We understand that no two businesses are alike. That’s why we take a personalized approach to every project. Whether you need a small-scale application or a complex enterprise system, we’ll work closely with you to understand your requirements and deliver a tailor-made solution that aligns with your goals.</ListItems>

                        <ListItems title="Cutting-Edge Technologies">We understand that no two businesses are alike. That’s why we take a personalized approach to every project. Whether you need a small-scale application or a complex enterprise system, we’ll work closely with you to understand your requirements and deliver a tailor-made solution that aligns with your goals.</ListItems>

                        <ListItems title="Agile Development">We follow Agile development practices to ensure transparency, collaboration, and quick delivery. Throughout the development process, you’ll have regular updates, and we welcome your feedback to fine-tune the project as it progresses.</ListItems>

                    </ul>
 
            </div>
        </section>
    )
}

export default SectionUnlockItems;


const ListItems = (props) => {
    return (
        <li>
            <div className="col-10 col-md-7 mx-auto">
                <div className="mt-5 pt-0 pt-md-5"></div>
                <div className="pt-0 pt-lg-5"></div>
                <h3 className="font-poppins-bold fs-18 fs-md-20">{props.title}</h3>
                <div className="my-4 d-flex d-md-block justify-content-center">
                    <div className="heading-bordered"></div>
                </div>
                <div className=" text-grey">{props.children}</div>
                <div className="mt-5 pt-0 pt-md-5"></div>
            </div>
        </li>
    )
}