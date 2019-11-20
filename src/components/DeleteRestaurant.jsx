import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';


const DeleteRestaurant = () => {
  const [id, setId] = useState('');

  const submit = (event) => {
    const response = axios.delete(
      `http://localhost:8080/restaurants/${id}`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    event.preventDefault();
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to delete a restaurant from database.</Text>
            <Form success>
              <Form.Input type="text" name='id' onChange={event => setId(event.target.value)} placeholder="Id: " />
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