import React, { PropTypes } from 'react'
import axios from 'axios';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.satae={
      data:{},
      wait:true
    }
  }
  componentDidMount() {
    //  Promise
    let id = this.props.params.id;
    let address = `http://localhost:3000/post/${id}`
    axios.get(address)
    .then(res => {
      this.setState({
        data: res.data.post,
        wait:false
      })
      console.log(this.state.data);
    });
  }
  render () {
    return(
      <div>
         类别： { this.state.wait? '请稍等' : this.state.data.category } <br />
         标题： { this.state.wait? '请稍等' : this.state.data.title } <br />
         内容： { this.state.wait? '请稍等' : this.state.data.content }
      </div>
    )
  }
}

export default ShowPost;
