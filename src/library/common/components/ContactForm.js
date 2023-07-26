import React, { useState } from 'react';
import Utilities from '../../helpers/Utilities';

const ContactForm = ( props ) => {

    let defaultFormValues = {
        name : '',
        email : '',
        message : '',
    }

    const button_name = props.buttonName ?? 'btn-submit-contact';
    const fieldsChecker = [ 'name', 'email', 'message' ];
    const [ formValues, setFormValues ] = useState(defaultFormValues);


    const pushValue = (e, fieldName ) =>{
        fieldName = fieldName.toLowerCase();
        let value = e.target.value;

        let formValuesTemp = formValues;

        if ( fieldName==='name'){
            formValuesTemp = { ...formValuesTemp, ...{ name : value } };
        }else if ( fieldName==='email'){
            formValuesTemp = { ...formValuesTemp, ...{ email : value } };
        }else if ( fieldName==='message'){
            formValuesTemp = { ...formValuesTemp, ...{ message : value } };
        }

        Utilities.removeFormGroupClass(fieldName, `error-important`);
        setFormValues(formValuesTemp);
        
    }

    const handleSubmitSendContact = async () => {

        Utilities.elementDisabledStatus(button_name, false );

        let errorCounter = 0;
        Object.entries(formValues).map( ([ key, value]) => { 
            if ( fieldsChecker.includes(key) ){
                if ( Utilities.isEmpty(value )){
                    Utilities.addFormGroupClass(key, `error-important`);
                    errorCounter++;

                }else if (key=='email'){
                    if ( !Utilities.isEmail(value )){
                        Utilities.addFormGroupClass(key, `error-important`);
                        errorCounter++;
                    }
                }
            }
        });
    
        if ( errorCounter>0 ){  return false; }

         /*  const emailContentMessageHtml = `
                                        <p>Name: ${formValues.name}</p>
                                        <p>Email: ${formValues.email}</p>
                                        <p>Message: </p>
                                        <p>${formValues.message}</p>
                                    `;

        const passVal = {
            subject : "web - contact us",
            name : formValues.name,
            to_email : "support@beonchat.com",
            message : emailContentMessageHtml
        }
        

      Utilities.elementDisabledStatus(button_name, true );
        
        const responseDetail = await sendContact( passVal );
        console.log(responseDetail);
        
        Utilities.elementDisabledStatus(button_name, false );
        if ( Object.keys(responseDetail).length===0 ){
            Utilities.messagePopup('error', TitlesLabels.general.title_unableToSendDetail)

            return false;
        }

        if ( parseInt(responseDetail.status)===0 ){
            Utilities.messagePopup('error', TitlesLabels.general.title_unableToSendDetail)

        }else{
            Utilities.messagePopup('success', TitlesLabels.general.title_detailHasBeenSent)
            setFormValues(defaultFormValues);
        } */

    }

    return (
        <form className=" text-lowercase form-theme form-theme-dark" autoComplete="off">
            
            <div className="form-group mt-4">
                <input type="text" name="name" className="form-control text-black-important" placeholder=" " autoComplete="off" required value={ formValues.name }  onChange={ (e) => pushValue( e, 'name') }/>
                <label className="form-label  ">name</label>
            </div>
            <div className="form-group">
                <input type="email" name="email" className="form-control text-black-important" placeholder=" " autoComplete="off"  required value={ formValues.email }  onChange={ (e) => pushValue( e, 'email') } />
                <label className="form-label  ">email address</label>
            </div>
            <div className="form-group border-0">
                <textarea  name="message" className="form-control textarea-contact-message" placeholder=" " rows={ props.messageInputRows ?? 4 } required value={ formValues.message }  onChange={ (e) => pushValue( e, 'message')}></textarea>
                <label className="form-label  ">message</label>
            </div>


            <div className="mt-5">
                    <button type='button' id={button_name} className='btn-theme-dark col-6 col-md-3 col-lg- mx-auto' onClick={ () => handleSubmitSendContact() }>submit</button>
            </div>

        </form>
       
    )
}
export default ContactForm;