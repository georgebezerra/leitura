import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { handleDeletePost } from '../../store/actions/posts';

class Remove extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      redirectHome: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleDelete = e => {
    e.preventDefault();
    console.log(this.state);
    const { dispatch, post } = this.props;
    dispatch(handleDeletePost(post.id));
    this.setState(() => ({
      redirectHome: true
    }));
  };
  render() {
    // console.log('REMOVE COMPONENT: ', this.props);
    // if (this.state.redirectHome === true) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <Button className="remove" variant="light" onClick={this.handleShow}>
          <strong>X</strong> remove
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>X Remove Tool</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove hotel?</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="light" onClick={this.handleDelete}>
              Yes, remove
            </Button>
          </Modal.Footer>
        </Modal>
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
export default connect(mapStateToProps)(Remove);
