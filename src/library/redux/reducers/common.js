export const showContactFormReducer = ( state = false, action ) =>{
    switch (action.type) {
        case 'SHOWCONTACTFORM':
                state = action.payload;
                return state;
            break;

        default:
            return state;
            break;
    }
}