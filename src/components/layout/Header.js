import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <Head>
        <h1>READ</h1>
        <hr />
      </Head>
    );
  }
}

export default Header;
