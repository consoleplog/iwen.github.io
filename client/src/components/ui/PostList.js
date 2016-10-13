import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';
import Settings from '../../settings'
import filter from 'lodash/fp/filter';

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
        float:'right',
        textDecoration:'none',
        color:'red'
      }
    }
  }
  // handClick(){
  //   axios.delete(`http://localhost:3000/posts${id}`)
  //   // POST /posts according to REST api structrue
  // }
  filterPosts(id){
    alert(id);
    var newPosts = filter((post) => {return post._id !== id }, this.state.posts);
      this.setState({
        posts: newPosts
      })
  }
  handeleClick(id){
    console.log('-handleClick');
    axios.delete(`${Settings.host}/posts/${id}`).then( res => {
      console.log(res.data.message)
       // 筛除已经删除的这个 post
       this.filterPosts(id)
    })
    console.log(id);
  }
  componentWillMount() {
    //  Promise
    axios.get(`${Settings.host}/posts`).then(res => {
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
          <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>
          <Link to={``} style={styles.link} onClick={this.handeleClick.bind(this,post._id)}>delete</Link>
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
