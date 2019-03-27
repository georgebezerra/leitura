import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/helpers';
import styled from 'styled-components';

const Lista = styled.p`
  margin: 1rem 0rem 0rem 0rem;
  text-align: center;
  word-spacing: 1rem;
`;
class Posts extends Component {
  render() {
    console.log('POSTS COMPONENT: ', this.props);
    const { post } = this.props;
    const { title, author, timestamp, commentCount } = post;
    return (
      <div>
        <h4>{title}</h4>
        <Lista>
          <span>By:{author}</span>
          <span> When:{formatDate(timestamp)}</span>
          <span> Comments: {commentCount} </span>
        </Lista>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, posts }, { id }) {
  const post = posts[id];

  return {
    post
  };
}
export default connect(mapStateToProps)(Posts);
