import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPost } from '../../store/actions/posts';

class NewPost extends Component {
  state = {
    title: '',
    category: '',
    content: ''
  };

  handleChange = e => {
    const stateItem = e.target.id;
    const value = e.target.value;

    this.setState(() => ({
      [stateItem]: value
    }));
  };
  handleSumit = e => {
    e.preventDefault();
    this.props.dispatch(handleAddPost(this.state.title, this.state.category, this.state.content));
    this.setState(() => ({
      title: '',
      category: '',
      content: ''
    }));
  };

  render() {
    return (
      <div>
        <h3>CREATE A NEW POST</h3>
        <hr />
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
              value={this.state.title}
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
              value={this.state.category}
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
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create New Post
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewPost);
