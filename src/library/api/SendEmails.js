import axios from 'axios';
import ApiUrls from '../helpers/ApiUrls';

const API_PLUS_TOKEN = process.env.REACT_APP_chat_api_token;

export const sendContact = async ( passval = {} ) =>{
    let responseDetail = {};
   
    if ( Object.entries(passval).length>0 ){
        try {
            passval = { ...passval, ...{ api_token : API_PLUS_TOKEN.toString() } };
            //console.log(passval, ApiUrls.sendingEmailGeneral);
            const responseURL = await axios.post( ApiUrls.sendingEmailGeneral , passval );
          
            if ( parseInt(responseURL.status)===201 ){
                responseDetail =  responseURL.data;
            }

        } catch (e) {
            console.log(e);
        }
    }
    return responseDetail;
}