import React, { useState } from 'react';
import axios from "axios";
import { Form, Grid } from 'semantic-ui-react';
import Text from './Text';
import styled from 'styled-components';

const AddFood = ({ restaurantId }) => {
  const [food, setfood] = useState({
    name: '',
    price: '',
    description: '',
  });

  const submit = (event) => {
    console.log(food.name);
    const response = axios.post(
      `http://localhost:8080/foods/${restaurantId}`,
      food,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(value => {
      console.log(value.data);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    food[event.target.name] = event.target.value;
    setfood(food);
  };

  return (
    <StyledWrapper>
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Welcome! <br />Please enter information.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='price' onChange={handleChange} placeholder="Price: " />
              <Form.Input type="text" name='description' onChange={handleChange} placeholder="Description: " />
              <button className="ui grey button">Add food</button>
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

export default AddFood;