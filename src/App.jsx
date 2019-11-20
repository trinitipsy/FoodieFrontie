import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Restaurants from './components/Restaurants';
import RestaurantDetails from './components/RestaurantDetails';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import AddRestaurant from './components/AddRestaurant';
import Footer from './components/Footer';
import DeleteRestaurant from './components/DeleteRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import AddFood from './components/AddFood';
import Users from './components/Users';

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
      <SignUp path="/sign-up" />
      <AddRestaurant path="/add-restaurant" />
      <NotFound default />
      <DeleteRestaurant path="/restaurants/delete-restaurant" />
      <UpdateRestaurant path="/restaurants/update-restaurant" />
      <DeleteFood path="/restaurants/:restaurantId/delete-food" />
      <UpdateFood path="/restaurants/:restaurantId/update-food" />
      <AddFood path="/add-food" />
      <Users path="/users" />
    </Router>
    <Footer />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  text-align: center;
  background-color: #0d0d0d;

`;
export default App;