import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const navbarLinks = [
  { path: '/', name: 'Home' },
  { path: '/restaurants', name: 'Restaurants' },
  { path: '/contact', name: 'Contact' },
  { path: '/add-restaurant', name: 'Add restaurant', isAdmin: true },
  { path: '/log-in', name: 'Login' },
  { path: '/sign-up', name: 'Sign Up' },
  { path: '/users', name: 'Users' }
];

const createNavbarLinks = isAdmin => navbarLinks
  .map(link => {
    if (isAdmin || !link.isAdminPage) {
      return <Link to={link.path}><li>{link.name}</li></Link>;
    }
    return null;
  });

const Navbar = ({ user = { isAdmin: false } }) => (
  <StyledWrapper>
    {createNavbarLinks(user.isAdmin)}
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