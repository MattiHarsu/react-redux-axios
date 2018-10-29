import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            id: '',
            title: '',
            body: ''
        };
        
        this.sendPost=this.sendPost.bind();
    }
    
    
    sendPost = (event) => {
    
      event.preventDefault();
        
      const post = {
         id: this.state.id,
         title: this.state.title,
         body: this.state.body
      }
      console.log("SendPost");
      this.props.createPost(post);
          
      this.setState({id:'', title:'',body:''});
      console.log("SendPost2");    
    }
    
    render() {
        return(
        <div>
            <h1>React-Redux Post-program</h1>
            <h2>Add Post</h2>
            <form onSubmit={this.sendPost}>
                <div>
                    <label>Id: </label><br />
                    <input type="text" value={this.state.id} onChange={(event) => this.setState({id:event.target.value})} />
                </div>
                <br />
            
                <div>
                    <label>Title: </label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({title:event.target.value})} />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea value={this.state.body} onChange={(event) => this.setState({body:event.target.value})} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);