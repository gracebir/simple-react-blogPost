import { combineReducers } from 'redux';
import blogReducers from './blogReducers';


export default combineReducers({
    blog : blogReducers
});
    
