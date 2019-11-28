import React, { useState, useEffect } from 'react';
import axios from '../API/AxiosInstance';
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
    if (user.password !== user.confirmPass) {
      alert("Password do not match!!!")
    } else {
      const response = axios.put(
        `users`,
        user,
        { headers: { 'Content-Type': 'application/json' } }
      );
      response
        .then(() => {
          navigate('/home');
        })
        .catch(err => {
          alert(`Error occurred: ${err.message}`);
        });
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    user[event.target.name] = event.target.value;
    setUser(user);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios('users/get');
      setUser(data);
    }
    fetchUser();
  }, []);

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to update a user info in database.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} defaultValue={user.name} />
              <Form.Input type="text" name='surname' onChange={handleChange} defaultValue={user.surname} />
              <Form.Input type="text" name='address' onChange={handleChange} defaultValue={user.address} />
              <Form.Input type="text" name='email' onChange={handleChange} defaultValue={user.email} />
              <Form.Input type="password" name='password' onChange={handleChange} placeholder='Password: ' />
              <Form.Input type="password" name='confirmPass' onChange={handleChange} placeholder='Confirm password: ' />
              <Button inverted color='grey' size='massive'>Update account</Button>
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

export default UpdateUser;