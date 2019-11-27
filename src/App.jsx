import React from 'react';
import styled from 'styled-components';
import { Redirect, Router } from '@reach/router';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
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
import Text from './components/Text';
import LandingPage from './components/LandingPage';

const NotFound = () => <div className="notFoundPage"><Text>404 - Page Not Found</Text></div>;

const redirectCheckIn = <Redirect from="" to="/" noThrow />;

 const UserRoute = ({ component: Component, ...rest }) => (
   AuthService.isUser() ? <Component {...rest} /> : redirectCheckIn
 );
const AdminRoute = ({ component: Component, ...rest }) => (
  AuthService.isAdmin() ? <Component {...rest} /> : redirectCheckIn
);
const ProtectedRoute = ({ component: Component, ...rest }) => (
  AuthService.isAdmin() || AuthService.isUser() ? <Component {...rest} /> : redirectCheckIn
);


const App = () => {

  const isLoggedIn = AuthService.getRole() != null;

  return (
    <StyledWrapper>
      {isLoggedIn &&
        <Navbar />
      }
      <Router>
        <CheckIn path="/" />
        <ProtectedRoute path="/home" component={LandingPage} />
        <ProtectedRoute path="/restaurants" component={Restaurants} />
        <ProtectedRoute path="/restaurants/:restaurantId/menu" component={RestaurantDetails} />
        <ProtectedRoute path="/contact" component={Contact} />
        <LogIn path="/log-in" />
        <SignUp path="/sign-up" />
        <AdminRoute path="restaurants/add" component={AddRestaurant} />
        <NotFound default />
        <AdminRoute path="/restaurants/:restaurantId/delete" component={DeleteRestaurant} />
        <AdminRoute path="/restaurants/:restaurantId/update" component={UpdateRestaurant} />
        <AdminRoute path="/food/:foodId/delete" component={DeleteFood} />
        <AdminRoute path="/food/:foodId/update" component={UpdateFood} />
        <AdminRoute path="/restaurants/:restaurantId/add-food" component={AddFood} />
        <AdminRoute path="/users" component={Users} />
        <AdminRoute path="/users/update" component={UpdateUser} />
        <ProtectedRoute path="/settings" component={Settings} />
      </Router>
      {isLoggedIn &&
        <Footer />
      }
    </StyledWrapper>);
};

const StyledWrapper = styled.div`
  text-align: center;
  background-color: #0d0d0d;
  .notFoundPage {
    height: 300px;
    padding: 100px;
  }
`;
export default App;
