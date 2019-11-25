import React, { useState } from 'react';
import axios from '../API/AxiosInstance';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';


const UpdateRestaurant = ({ restaurantId, navigate }) => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    address: '',
    description: ''
  });

  const submit = (event) => {
    const response = axios.put(
      `restaurants/${restaurantId}`,
      restaurant,
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

  const handleChange = (event) => {
    restaurant[event.target.name] = event.target.value;
    setRestaurant(restaurant);
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to update a restaurant info in database.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='email' onChange={handleChange} placeholder="Email: " />
              <Form.Input type="text" name='address' onChange={handleChange} placeholder="Address: " />
              <Form.Input type="text" name='description' onChange={handleChange} placeholder="Description: " />
              <Button inverted color='grey' size='massive'>Update restaurant</Button>
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

export default UpdateRestaurant;
