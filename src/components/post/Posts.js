import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/helpers';
import styled from 'styled-components';
import { handleInitialData } from '../../store/actions/shared';

const Lista = styled.p`
  margin: 1rem 0rem 0rem 0rem;
  text-align: center;
  word-spacing: 1rem;
`;
class Posts extends Component {
  state = {
    currentPosts: ''
  };

  componentDidMount() {
    this.setState(() => ({
      currentPosts: this.props.posts
    }));
    this.props.dispatch(handleInitialData(this.props.currentPosts));
  }

  componentDidUpdate() {
    if (this.state.currentPosts !== this.props.posts) {
      this.setState(() => ({
        currentPosts: this.props.posts
      }));
      this.props.dispatch(handleInitialData(this.props.posts));
    }
  }
  render() {
    const { post } = this.props;
    const { title, author, timestamp, commentCount } = post;

    if (!post) {
      return <Redirect to="PageNotFound" />;
    }

    // console.log('POSTS COMPONENT: ', this.props);

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
