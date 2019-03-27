import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { handleAddPost } from '../../store/actions/posts';

class Remove extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      title: '',
      content: '',
      category: '',
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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSumit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(handleAddPost(this.state));
    this.setState(() => ({
      redirectHome: true
    }));
  };
  render() {
    // console.log('NEW COMPONENT: ', this.props);
    // if (this.state.redirectHome === true) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <Fragment>
          <Button className="newpost" onClick={this.handleShow}>
            NewPost
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>CREATE A NEW POST</Modal.Title>
            </Modal.Header>
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
                <Button variant="light" type="submit" className="btn btn-primary">
                  Create New Post
                </Button>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="light" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="light" onClick={this.handleDelete}>
              Create New Post
            </Button>
          </Modal.Footer> */}
          </Modal>
        </Fragment>
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
