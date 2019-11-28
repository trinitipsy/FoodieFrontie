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
          //axios.defaults.headers.common['Authorization'] = AuthService.getAuthorization();
          window.location.href="/home";
        } else {
          this.setState({ message: res.data.message });
        }
      }).catch(function (e) {
        console.error(e);
        alert("Something went wrong. Check the information you entered.");
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
              <Form.Input error placeholder='Password:' type="password" name="password" onChange={handleChange} />
              <Button inverted color='black' size='massive'>Log in</Button>
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

export default LogIn;

