import React, { PropTypes } from 'react'
import axios from 'axios';
import Settings from '../../settings'
import EditForm from './EditForm'
import isEmpty from 'lodash/fp/isEmpty';
import {Link,browserHistory} from 'react-router';
class EditPost extends React.Component {
  constructor(){
    super();
    this.state = {
      post: {}
    }
  }
  componentDidMount(){
    var id =this.props.params.id;
    console.log(id)
    axios.get(`${Settings.host}/post/${id}`).then( res => {
      console.log(res)
      this.setState({
        post: res.data.post
      })
    })
  }
  publishPost(data){
    let id = this.props.params.id;
    console.log(this.props);
    axios.put(`${Settings.host}/posts/${id}`,data).then(res =>{
      console.log(res.data)
        browserHistory.push('/')
    })
  }
  render () {
    let styles={}
    return(
      <div>
        <div>
          { !isEmpty(this.state.post) ? <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)} />: "plz wait..."}
        </div>
      </div>
    )
  }
}

export default EditPost;
