import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { removePost } from '../actions/postActions';
import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

class Posts extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
   
    }
    
    componentWillMount() {
       console.log("Posts::componentWillMount");
       this.props.fetchPosts(); 
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        console.log(nextProps);
    }
   
    
    handleDelete = post => {
      console.log("handleDelete-1");
      // removePost() is part of the Redux Actions functionality
      this.props.removePost(post); 
      console.log("handleDelete-2");  
    }
    
    render() {
        console.log("Posts: Main function");
        console.log(this.props.posts);
        return(
        <div>
            <h1>Posts</h1>
                <ul>
                {this.props.posts.map(post => 
                
                    <li key={post.id}>{post.id},{post.title},{post.body}:
                        <button onClick={this.handleDelete.bind(this, post)}>Poista</button></li>
                )
                }
                </ul>
        </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts, removePost })(Posts);