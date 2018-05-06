import React, { Component } from 'react';
import axios from 'axios';

class PostsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/posts')
    .then(response => {
        console.log(response)
        this.setState({
            posts: response.data
        }, () => { console.log('This is:', this)})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="posts-container">
          Posts
      </div>
    )
  }
}

export default PostsContainer;