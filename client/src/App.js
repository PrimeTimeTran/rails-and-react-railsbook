import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap'

import PostsContainer from './containers/PostsContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <PostsContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  firstRow: {
    backgroundColor: '#e9ebee'
  },
  secondRow: {
    backgroundColor: 'pink'
  },
  thirdRow: {
    backgroundColor: 'blue'
  },
  fourthRow: {
    backgroundColor: 'yellow'
  }
}

export default App;
