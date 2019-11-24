import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Form, Grid, Button } from 'semantic-ui-react';
import AuthService from '../service/AuthService';
import axios from 'axios';

const LogIn = ( { navigate } ) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    message: ''
  });

  const handleChange = (event) => {
    state[event.target.name] = event.target.value;
    setState(state);
  };

  const submit = (event) => {
    event.preventDefault();
    const credentials = { username: state.username, password: state.password };
    AuthService.login(credentials)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          axios.defaults.headers.common['Authorization'] = AuthService.getAuthorization();
          window.location.href="/home";
        } else {
          this.setState({ message: res.data.message });
        }
      });
  };
  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Welcome! <br />Please enter your mail and password below.</Text>
            <Form success>
              <Form.Input placeholder='Email:' type="text" name="username" onChange={handleChange} />
              <Form.Input placeholder='Password:' type="text" name="password" onChange={handleChange} />
              <Button inverted color='grey' size='massive'>Log in</Button>
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

export default LogIn;

