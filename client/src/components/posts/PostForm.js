import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaField from '../common/TextAreaField';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
            errors:{},

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const { user }=this.props.auth;
        const newPost = {
            text: this.state.text,
            name:user.name,
            avatar:user.avatar
        }
        this.props.addPost(newPost);
        this.setState({
            text:''
        })
        console.log(`Post Submitted.... ${this.state.text}`);
    }
    render() { 
        const { errors }=this.state;
        return ( 
                  <div className="post-form">
                    <div className="bg-primary p">
                    <h3>Say Something...</h3>
                    </div>
                    <form className="form my-1" onSubmit={this.onSubmit}>
                    <TextAreaField 
                     placeholder="Create a post!"
                     name="text"
                     value={this.state.text}
                     onChange={this.onChange}
                     error = {this.state.errors.text}
                    />
                    <input type="submit" className="btn btn-dark my-1" value="Submit" />
                    </form>
                </div>
         );
    }
}
PostForm.propTypes={
    addPost:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
}
const mapStateToProps=state=>({
    auth:state.auth,
    errors:state.errors
})
 
export default connect(mapStateToProps, {  addPost })(PostForm);