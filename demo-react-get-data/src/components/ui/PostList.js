import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      write:{
        color:'#fff',
         display:'block',
         width:'5em',
         height:'2em',
         backgroundColor:'#00bcd4',
         textDecoration:'none',
         lineHeight:'2em',
         borderRadius:'5px',
         textAlign:'center',
         margin:'10px auto'

      },
      link:{
        float:'right'
      }
    }
  }
  // handClick(){
  //   axios.delete(`http://localhost:3000/posts${id}`)
  //   // POST /posts according to REST api structrue
  // }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts: res.data.posts
      });
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.category}{post.title}{post.content}</div>
          <Link to={`/post/${post._id}`} style={styles.link} >check</Link>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to='/write' style={styles.write}><span>write</span></Link>
        { postList }
      </div>
    );
  }
}
