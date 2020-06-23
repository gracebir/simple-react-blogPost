import React, { Component,Fragment } from 'react'

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
                <h2>Post Page</h2>
                <table className="table tables-triped">
                <thead>
                </thead>
                <tbody>
                    {this.state.posts.map(post =>(
                        <tr key={post.id}>
                            <td><h3> Publier le:</h3> <br/>{post.date_p}</td>
                            <td><h3> Title :</h3> <br/>{post.title}</td>
                            <td><h3> Content</h3> <br/>{post.content}</td>
                            <td><button className="btn btn-danger btn-sm">
                                delete post</button></td>
                        </tr>
                    ))}
                </tbody>        
                </table>
            </Fragment>
        )
    }
}

export default Posts
