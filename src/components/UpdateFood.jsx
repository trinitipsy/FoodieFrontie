import React, { useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';


const UpdateFood = ({ foodId, navigate }) => {
  const [food, setFood] = useState({
    name: '',
    price: '',
    description: '',
  });

  const submit = (event) => {
    const response = axios.put(
      `http://localhost:8080/foods/${foodId}`,
      food,
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
    food[event.target.name] = event.target.value;
    setFood(food);
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to update a food in database.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='price' onChange={handleChange} placeholder="Price: " />
              <Form.Input type="text" name='description' onChange={handleChange} placeholder="Description: " />
              <button className="ui grey button">Update food</button>
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

export default UpdateFood;