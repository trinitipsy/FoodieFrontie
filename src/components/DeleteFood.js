import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';


const DeleteRestaurant = () => {
  const [idRestaurant, setidRestaurant] = useState('');
  const [idFood, setidFood] = useState('');

  const submit = (event) => {
    const response = axios.delete(
      `http://localhost:8080/foods/${idRestaurant}/${idFood}`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    event.preventDefault();
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to delete a food from database.</Text>
            <Form success>
              <Form.Input type="text" name='idRestaurant' onChange={event => setidRestaurant(event.target.value)} placeholder="Restaurant Id: " />
              <Form.Input type="text" name='idFood' onChange={event => setidFood(event.target.value)} placeholder="Food Id: " />
              <button className="ui grey button">Delete restaurant</button>
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