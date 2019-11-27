import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import axios from "../API/AxiosInstance";
import AuthService from '../service/AuthService';

const SignUp = () => {
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
      'users',
      user,
      { headers: { 'Content-Type': 'application/json' } }
    );
    response.then(res => {
      if (res.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        axios.defaults.headers.common['Authorization'] = AuthService.getAuthorization();
        window.location.href = "/home";
      } else {
        console.log("Something went wrong.")
        window.location.href = "/";
      }
    }).catch(function (e) {
      console.error(e);
      alert("Something went wrong. Check the information you entered.");
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
              <Button inverted color='black' size='massive'>Sign up</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  `;

export default SignUp;
