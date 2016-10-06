var axios = require ('axios');

var data = {
	title:'myTtitle',
	content:'myContent'
}

axios.post('http://localhost:3001/posts',data)
