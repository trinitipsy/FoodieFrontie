import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Restaurants from './components/Restaurants';
import RestaurantDetails from './components/RestaurantDetails';
import LogIn from './components/LogIn';

const NotFound = () => <div><h1>404 - Page Not Found</h1></div>;

const App = () => (
  <StyledWrapper>
    <Navbar />
    <Router>
      <LandingPage path="/" />
      <Restaurants path="/restaurants" />
      <RestaurantDetails path="/restaurants/:restaurantId" />
      <Contact path="/contact" />
      <LogIn path="/log-in" />
      <NotFound default />
    </Router>
    
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  text-align: center;
  background-color: #0d0d0d;

`;
export default App;
