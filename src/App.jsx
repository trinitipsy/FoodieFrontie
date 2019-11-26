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
import UpdateUser from './components/UpdateUser';
import AuthService from "./service/AuthService";
import CheckIn from './components/CheckIn';
import Settings from './components/Settings';

const NotFound = () => <div><h1>404 - Page Not Found</h1></div>;

const App = () => {

  const isLoggedIn = AuthService.getRole() != null;

  return (
    <StyledWrapper>
      {isLoggedIn &&
        <Navbar />
      }
      <Router>
        <CheckIn path="/" />
        <LandingPage path="/home" />
        <Restaurants path="/restaurants" />
        <RestaurantDetails path="/restaurants/:restaurantId" />
        <Contact path="/contact" />
        <LogIn path="/log-in" />
        <SignUp path="/sign-up" />
        <AddRestaurant path="restaurants/add" />
        <NotFound default />
        <DeleteRestaurant path="/restaurants/:restaurantId/delete" />
        <UpdateRestaurant path="/restaurants/:restaurantId/update-restaurant" />
        <DeleteFood path="/restaurants/:foodId/delete-food" />
        <UpdateFood path="/restaurants/:foodId/update-food" />
        <AddFood path="/restaurants/:restaurantId/add-food" />
        <Users path="/users" />
        <UpdateUser path="/users/update-user" />
        <Settings path="/settings" />
      </Router>
      <Footer />
    </StyledWrapper>);
};

const StyledWrapper = styled.div`
  text-align: center;
  background-color: #0d0d0d;

`;
export default App;
