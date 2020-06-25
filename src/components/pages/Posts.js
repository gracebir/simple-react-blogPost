import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { getBlog } from '../../actions/blog';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Posts extends Component {

    componentWillMount(){
       this.props.getBlog();
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
                    {this.props.blog.map(blog =>(
                        <tr key={blog.id}>
                            <td>{blog.date_p}   </td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
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


Posts.propTypes={
    getBlog: PropTypes.func.isRequired,
    blog: PropTypes.array.isRequired
}

const mapStateToProps = (state) =>{
    return {
        blog: state.blog.items
    }
}

export default connect(mapStateToProps, { getBlog })(Posts);
