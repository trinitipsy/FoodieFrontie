import React, { useState } from 'react';
import axios from "../API/AxiosInstance";
import { Form, Grid , Button } from 'semantic-ui-react';
import Text from './Text';
import styled from 'styled-components';

const AddFood = ({ restaurantId }) => {
  const [food, setfood] = useState({
    name: '',
    price: '',
    description: '',
  });

  const submit = (event) => {
    const response = axios.post(
      `foods/${restaurantId}`,
      food,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(value => {
      console.log(value.data);
      window.location.href='/restaurants';
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
              <Button inverted color='black' size='big'>Add food</Button>
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

export default AddFood;