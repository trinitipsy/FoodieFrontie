import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Navbar = () => (
  <StyledWrapper>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/restaurants">
      <li>Restaurants</li>
    </Link>
    <Link to="/contact">
      <li>Contact</li>
    </Link>
    <Link to="/log-in">
      <li>Log In</li>
    </Link>
  </StyledWrapper>
)

const StyledWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;


li {
  float: left;
  color: white;
  width: 150px;
  height: 75px;
  padding: 30px;
  font-size: 20px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: #111;
}
.check_in {
  float: right;
}
`;

export default Navbar;