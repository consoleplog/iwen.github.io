import axios from 'axios'

axios.get(`http://localhost3000/posts`).then ( res =>{
  var data =  {title:"myTitle",content:"myContent"}
  console.log(data)
})
