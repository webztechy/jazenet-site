const API_CHAT_URL = process.env.REACT_APP_chat_api_url;

class ApiUrlsHelper {
    
    sendingEmailGeneral = `${API_CHAT_URL}/general/send_system_email`

}

export default new ApiUrlsHelper();