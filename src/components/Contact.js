import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button, Form, Message } from 'semantic-ui-react';
import Text from './Text';

const Footer = () => (
  <StyledWrapper>
    <Grid className="grid_parent">

      <Grid.Column className="contact" width={10}>
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
          <Message
            visible
            content="Your message here..."
          />
          <button className="ui grey button">Submit</button>
        </Form>
      </Grid.Column>
    </Grid>
  </StyledWrapper>
)
const StyledWrapper = styled.div`

padding: 60px;
height: 70%;
margin: 100px;
.grid_parent {
   
}
`;
export default Footer;