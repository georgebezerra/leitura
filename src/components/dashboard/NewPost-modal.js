import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPost } from '../../store/actions/posts';
import { Button, Modal } from 'react-bootstrap';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    category: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSumit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(handleAddPost(this.state));
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>CREATE A NEW POST</h3>
            </Modal.Title>
          </Modal.Header>
          <hr />
          <Modal.Body>
            <form onSubmit={this.handleSumit}>
              <div className="form-group">
                <label htmlFor="tooltitle">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  aria-describedby="toolName"
                  placeholder="title"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="toolgs">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="form-control"
                  aria-describedby="toolCategory"
                  placeholder="category"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="tooldescription">Content</label>
                <textarea
                  rows="3"
                  id="content"
                  name="content"
                  className="form-control"
                  aria-describedby="Content"
                  placeholder="content"
                  maxLength={300}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create New Post
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect()(NewPost);
