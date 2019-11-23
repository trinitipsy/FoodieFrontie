import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';

const DeleteRestaurant = ({ restaurantId, navigate }) => {

  const submit = (event) => {
    const response = axios.delete(
      `http://localhost:8080/restaurants/${restaurantId}`,
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
      <button className="ui grey button" onClick={submit} >Delete!</button>
      <button className="ui grey button" onClick={handleClose} >Cancel!</button>
    </StyledWrapper>

  )
};

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default DeleteRestaurant;