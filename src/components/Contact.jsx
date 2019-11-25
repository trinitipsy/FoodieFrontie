import React from 'react';
import styled from 'styled-components';
import { Form, Message, Grid,Button } from 'semantic-ui-react';
import Text from './Text';

const Footer = () => (
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
        <Form success>
          <Form.Input placeholder='Email: joe@schmoe.com' />
          <Message visible content="Your message here..." />
          <Button inverted color='black' size='big'>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
  </StyledWrapper>
)
const StyledWrapper = styled.div`
  background-image: url("sparkle.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 80px;
  `;

export default Footer;