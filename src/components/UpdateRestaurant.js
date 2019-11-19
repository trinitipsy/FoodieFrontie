import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';


const DeleteRestaurant = () => {
  const [id, setId] = useState('');
  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    address: '',
    description: ''
  });

  const submit = (event) => {
    const response = axios.put(
      `http://localhost:8080/restaurants/${id}`,
      restaurant,
      { headers: { 'Content-Type': 'application/json' } }
    );
    response.then(value => {
      console.log(value.data);
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
              <Form.Input type="text" name='id' onChange={event => setId(event.target.value)} placeholder="Id: " />
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='email' onChange={handleChange} placeholder="Email: " />
              <Form.Input type="text" name='address' onChange={handleChange} placeholder="Address: " />
              <Form.Input type="text" name='description' onChange={handleChange} placeholder="Description: " />
              <button className="ui grey button">Update restaurant</button>
            </Form>
          </Grid.Column>
        </Grid>
      </form>
    </StyledWrapper>

  )
};

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default DeleteRestaurant;
