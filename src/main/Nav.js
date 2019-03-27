import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NewPost from '../components/dashboard/NewPost';

const Menu = styled.ul`
  padding-left: 0;
  list-style: none;
  text-align: center;
  margin: 2rem 0rem 1rem 0rem;
`;
const Lista = styled.li`
  width: 5rem;
  text-align: center;
  list-style-type: none;
  display: inline-block;
  text-decoration: none;
  border: #00f solid 0.1rem;
  margin: 1rem 1rem 1rem 1rem;
  box-shadow: 0.1rem 0.1rem #000;
`;

export default function Nav() {
  return (
    <nav>
      <Menu>
        <Lista>
          <Link to="/">HOME</Link>
        </Lista>
        <Lista>
          <Link to="/pagereact">REACT</Link>
        </Lista>
        <Lista>
          <Link to="/pageredux">REDUX</Link>
        </Lista>
        <Lista>
          <Link to="/udacity">UDACITY</Link>
        </Lista>
        {/* <Lista><Link to="/newpost">NEW POST</Link></Lista> */}
        <NewPost />
      </Menu>
    </nav>
  );
}
