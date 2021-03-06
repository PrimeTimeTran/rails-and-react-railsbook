import React, { Component } from 'react';
import axios from 'axios';

import Post from '../components/Post';

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
      this.setState({ posts: response.data }, () => console.log('This state', this))
    })
    .catch(error => console.log(error))
  }

  renderPosts() {
    const posts = this.state.posts.data
    return posts.map(post => <div key={post.id}>{post.attributes.body}</div>)
  }

  render() {
    if (!this.state.posts.data) {
      return <div>Loading!</div>
    } else {
      return (
        <div className="posts-container">
          {this.renderPosts()}
        </div>
      )
    }
  }
}

export default PostsContainer;