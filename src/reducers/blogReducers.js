import { GET_BLOG, POST_BLOG, DELETE_BLOG } from '../actions/types';


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
        case POST_BLOG:
            return{
                ...state,
                item: action.payload
            };
        case DELETE_BLOG:
            return{
                ...state,
                items: state.items.filter(blog => blog.id !== action.payload)
            }
        default:
            return state;
    }
    
}