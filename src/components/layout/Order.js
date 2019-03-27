import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
`;

class Order extends Component {
  render() {
    return (
      <Head>
        <h3>
          Order by:
          <button type="button" className="btn btn-light">
            Votes
          </button>
          <button type="button" className="btn btn-light">
            Comments
          </button>
          <button type="button" className="btn btn-light">
            Time
          </button>
        </h3>
      </Head>
    );
  }
}

export default Order;
