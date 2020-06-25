import { GET_BLOG } from './types';

export const getBlog =() => dispatch=>{
    console.log('getBlog...')
    fetch('http://localhost:5000/api/blogpost')
        .then(res => res.json())
        .then(blogs => dispatch({
            type: GET_BLOG,
            payload: blogs
        }));
}