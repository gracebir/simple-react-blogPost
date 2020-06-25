import { GET_BLOG, POST_BLOG, DELETE_BLOG } from './types';

export const getBlog =() => dispatch=>{
    console.log('getBlog...')
    fetch('http://localhost:5000/api/blogpost')
        .then(res => res.json())
        .then(blogs => dispatch({
            type: GET_BLOG,
            payload: blogs
        }));
}

export const postBlog =(blogData) => dispatch=>{
    fetch('http://localhost:5000/api/blogpost/post',{
            method:"POST",
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: POST_BLOG,
            payload: data
        }))
}

export const deleteBlog =(id) => dispatch=>{
    fetch(`http://localhost:5000/api/blogpost/delete/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_BLOG,
            payload: data
        }));
}