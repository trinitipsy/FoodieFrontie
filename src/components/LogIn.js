import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { Form, Grid } from 'semantic-ui-react';

const LogIn = () => (
  <StyledWrapper class="ui form">
    <Grid centered columns={3}>
    <Grid.Column>
        <Text>Welcome! <br />Please enter your name and password below.</Text>
        <Form success>
          <Form.Input placeholder='Name:' />
          <Form.Input placeholder='Email: joe@schmoe.com' />
          <button className="ui grey button">Log in</button>
        </Form>
      </Grid.Column>
    </Grid>
  </StyledWrapper>

);

const StyledWrapper = styled.div`
  padding: 60px;
  margin: 100px;
`;

export default LogIn;
