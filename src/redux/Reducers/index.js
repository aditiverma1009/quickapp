import { combineReducers } from 'redux';
import templatesReducer from './templatesReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  templatesReducer,
  loginReducer,
});
