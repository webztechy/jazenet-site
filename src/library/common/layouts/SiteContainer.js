import React from 'react';

const SiteContainer = ( props ) => {

    const propClassName = props.className??'';

    return (
        <div className={`container px-lg-0 ${propClassName}`}>{props.children}</div>
       
    )
}
export default SiteContainer;