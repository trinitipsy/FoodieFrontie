import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Text from './Text';
import { Form, Grid, Button } from 'semantic-ui-react';

const CheckIn = () => (
  <StyledWrapper>
    <Text fontSize={48}>Welcome to FoodSetGo!</Text>

    <Link to={'/log-in'}>
      <Button inverted color='black' size='massive'>Log in</Button>
    </Link>
    <Link to={'/sign-up'}>
      <Button inverted color='black' size='massive'>Sign up</Button>
    </Link>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  height: 350px;
  margin: 0;
  margin-bottom: 50px;
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  `;

export default CheckIn;