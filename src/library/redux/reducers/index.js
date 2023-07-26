import { combineReducers } from 'redux';
import { showContactFormReducer } from './common';

const allReducers = combineReducers({
    showContactForm : showContactFormReducer,
});

export default allReducers;