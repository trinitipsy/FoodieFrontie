import React from 'react';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';
import Text from './Text';

const SignUp = () => (
  <StyledWrapper class="ui form">
    <Grid centered columns={3}>
      <Grid.Column>
        <Text>Welcome! <br />Please enter your informations below.</Text>
        <Form success>
          <Form.Input placeholder='Name:' />
          <Form.Input placeholder='Email: example@gmail.come ' />
          <Form.Input placeholder='Address: ' />
          <Form.Input placeholder='Password: ' />
          <button className="ui grey button">Sign up</button>
        </Form>
      </Grid.Column>
    </Grid>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default SignUp;
