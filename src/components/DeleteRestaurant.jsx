import React from 'react';
import axios from '../API/AxiosInstance';
import Text from './Text';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const DeleteRestaurant = ({ restaurantId, navigate }) => {

  const submit = (event) => {
    const response = axios.delete(
      `restaurants/${restaurantId}`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    response
      .then(() => {
        window.location.href="/restaurants";
    // navigate('/restaurants');
      })
      .catch(err => {
        alert(`Error occurred: ${err.message}`);
      });
    event.preventDefault();
  };

  const handleClose = () => {
    window.location.href="/restaurants";
    // navigate('/restaurants');
  }

  return (
    <StyledWrapper class="ui form">
      <Text>
        Are you sure you want to delete restaurant from database?
      </Text>
      <Button inverted color='black' size='big' onClick={submit}>Delete</Button>
      <Button inverted color='black' size='big' nClick={handleClose} >Cancel</Button>
    </StyledWrapper>

  )
};

const StyledWrapper = styled.div`
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('sparkle.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default DeleteRestaurant;