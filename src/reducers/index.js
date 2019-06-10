import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import bmiReducer from './bmiReducer';

export default combineReducers({form: formReducer, bmi: bmiReducer});
