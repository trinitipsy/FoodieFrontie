import React, { useState } from 'react';
import axios from "axios";
import { Form, Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import styled from 'styled-components';

const AddRestaurant = ({ navigate }) => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    address: '',
    description: ''
  });

  const submit = (event) => {
    const response = axios.post(
      'http://localhost:8080/restaurants/',
      restaurant,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(value => {
      console.log(value.data);
      navigate('/restaurants');
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    restaurant[event.target.name] = event.target.value;
    setRestaurant(restaurant);
  };

  return (
    <StyledWrapper>
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Welcome! <br />Please enter information.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='email' onChange={handleChange} placeholder="Email: " />
              <Form.Input type="text" name='address' onChange={handleChange} placeholder="Address: " />
              <Form.Input type="text" name='description' onChange={handleChange} placeholder="Description: " />
              <Button inverted color='black' size='big'>Add restaurant</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </form>
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  `;

export default AddRestaurant;