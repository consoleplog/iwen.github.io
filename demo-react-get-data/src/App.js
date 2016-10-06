import React, { Component } from 'react';

export default class App extends React.Component{

  _handSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content =this.refs.content.value;
    let data = {title,content}
    console.log(data)
    // {title:"hello",content:"xxx"}
  }
  render(){
    return(
      <div>
        <form onSubmit={this._handSubmit.bind(this)}>
          <input type="text" ref='title' />
          <input type="text" ref='content' />
          <button type='submit'>click</button>
        </form>
      </div>
    )
  }
}
