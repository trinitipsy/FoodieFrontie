import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import axios from "axios";

const SignUp = ({ navigate} ) => {
const [user, setUser] = useState({
  name: '',
  surname: '',
  address: '',
  email: '',
  password: ''
});

const handleChange = (event) => {
  user[event.target.name] = event.target.value;
  setUser(user);
};

const submit = (event) => {
  const response = axios.post(
    'http://localhost:8080/users',
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );
  response.then(value => {
    console.log(value.data);
    navigate('/home');
  });
  event.preventDefault();
}

return (
  <StyledWrapper class="ui form">
    <form onSubmit={submit}>
    <Grid centered columns={3}>
      <Grid.Column>
        <Text>Welcome! <br />Please enter your informations below.</Text>
        <Form success>
          <Form.Input type="text" name='name' onChange={handleChange} placeholder='Name:' />
          <Form.Input type="text" name='surname' onChange={handleChange} placeholder='Surname:' />
          <Form.Input type="text" name='address' onChange={handleChange} placeholder='Address: ' />
          <Form.Input type="text" name='email' onChange={handleChange} placeholder='Email: example@gmail.come ' />
          <Form.Input type="text" name='password' onChange={handleChange} placeholder='Password: ' />
          <Button inverted color='grey' size='massive'>Sign up</Button>
        </Form>
      </Grid.Column>
    </Grid>
    </form>
  </StyledWrapper>
);
}

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default SignUp;
