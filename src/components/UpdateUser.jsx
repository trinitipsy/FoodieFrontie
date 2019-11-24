import React, { useState } from 'react';
import axios from 'axios';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';

const UpdateUser = ({ userId, navigate }) => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    address: '',
    email: '',
    password: ''
  });

  const submit = event => {
    const response = axios.put(
      `http://localhost:8080/users`,
      user,
      { headers: { 'Content-Type': 'application/json' } }
    );
    response
      .then(() => {
        navigate('/users');
      })
      .catch(err => {
        alert(`Error occurred: ${err.message}`);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    user[event.target.name] = event.target.value;
    setUser(user);
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to update a user info in database.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} placeholder="Name: " />
              <Form.Input type="text" name='surname' onChange={handleChange} placeholder="Surname: " />
              <Form.Input type="text" name='address' onChange={handleChange} placeholder="Address: " />
              <Form.Input type="text" name='email' onChange={handleChange} placeholder="Email: " />
              <Form.Input type="text" name='password' onChange={handleChange} placeholder="Password: " />
              <Button inverted color='grey' size='massive'>Update user</Button>
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

export default UpdateUser;