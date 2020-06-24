import React, { Component,Fragment } from 'react'
import {Link } from 'react-router-dom';

export class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentWillMount(){
        fetch('http://localhost:5000/api/blogpost')
        .then(res => res.json())
        .then(data => this.setState({posts: data}));
    }
    render() {
        return (
            <Fragment>
                {/* <div className="card card-body mt-4 mb-4"> */}
                <h2 className="mt-4">Post Page </h2>
                <table className="table tables-triped mt-4">
                <thead>
                    <th><h3> Date</h3></th>
                    <th><h3> Title</h3> </th>
                    <th><h3> Content</h3> </th>
                    <th><Link to="/addPost" className="btn btn-primary float-right mf-10">Add</Link></th>
                </thead>
                <tbody>
                    {this.state.posts.map(post =>(
                        <tr key={post.id}>
                            <td>{post.date_p}   </td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td><button className="btn btn-danger btn-sm">
                                delete post</button></td>
                        </tr>
                    ))}
                </tbody>        
                </table>
                {/* </div> */}
                
            </Fragment>
        )
    }
}

export default Posts
