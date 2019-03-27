import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../layout/Order';
import Posts from '../post/Posts';
import Remove from '../layout/Remove';

class Home extends Component {
  render() {
    console.log('HOME COMPONENT: ', this.props);
    return (
      <div>
        <h3>ALL POSTS</h3>
        <hr />
        <Order />
        {this.props.postsIds.map(id => (
          <span key={id}>
            <Posts id={id} />
            <Remove id={id} className="remove" />
          </span>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    postsIds: Object.keys(posts)
  };
}

export default connect(mapStateToProps)(Home);
