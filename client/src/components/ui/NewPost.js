import React, { Component } from 'react';
import Form from './Form';
import {Link,browserHistory} from 'react-router';
import axios from 'axios'

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  newPost(data){
    //axios ==>  ajax
    axios.post('http://localhost:3000/posts',data)
    // POST /posts according to REST api structrue
    .then(res =>{
      console.log(res.data.message);
      browserHistory.push('/')

    })
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form newPost={this.newPost.bind(this)}/>
      </div>
    );
  }
}
Form.contextTypes = {
  router:React.PropTypes.object.isRequired
}
export default NewPost;
