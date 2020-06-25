import { GET_BLOG } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action){
    // action include type and we will switch into deferent types
    switch(action.type){
       
        case GET_BLOG:
            return{
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
    
}