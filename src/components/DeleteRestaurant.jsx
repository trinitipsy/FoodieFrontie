import React, { Fragment, useEffect, useState } from 'react';
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
        navigate('/restaurants');
      })
      .catch(err => {
        alert(`Error occurred: ${err.message}`);
      });
    event.preventDefault();
  };

  const handleClose = () => {
    navigate('/restaurants');
  }

  return (
    <StyledWrapper class="ui form">
      <Text>
        Are you sure you want to delete restaurant from database?
      </Text>
      <Button inverted color='grey' size='massive' onClick={submit}>Delete</Button>
      <Button inverted color='grey' size='massive' nClick={handleClose} >Cancel</Button>
    </StyledWrapper>

  )
};

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default DeleteRestaurant;