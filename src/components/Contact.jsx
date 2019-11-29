import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import axios from '../API/AxiosInstance';

const Contact = ({ navigate }) => {
  const [userMessage, setUserMessage] = useState({
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    userMessage[event.target.name] = event.target.value;
    setUserMessage(userMessage);
  };

  const submit = (event) => {
    const response = axios.post(
      'send-message',
      userMessage,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(value => {
      console.log(value.data);
      navigate('/home');
    });
    event.preventDefault();
  };

  return (
    <StyledWrapper>
      <Grid>
        <Grid.Column width={10}>
          <Text><b>Contact us</b></Text>
          <Text>Phone: <i>032/433-324</i></Text>
          <Text>Email: <i>FoodSetGo@gmail.com</i></Text>
          <Text>Address: <i>Stepe Stepanovica 16</i></Text>
          <Text>Follow us on   <button className="ui facebook grey button">
            <i className="facebook icon"></i>
            Facebook</button></Text>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Text>Or send us direct message</Text>
          <Form success onSubmit={submit} >
            <Form.Input name='email' type="text" placeholder='Email: joe@schmoe.com' onChange={handleChange} />
            <Form.Input name='message' type="text" placeholder='Your message here' onChange={handleChange} />
            <Button inverted color='black' size='big'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </StyledWrapper>
  )
};
const StyledWrapper = styled.div`
  background-image: url("sparkle.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 80px;
  `;

export default Contact;