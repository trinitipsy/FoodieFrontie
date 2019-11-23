import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Text from './Text';

const CheckIn = () => (
  <StyledWrapper>
    <Text>Welcome to FoodSetGo!</Text>

    <Link to={'/log-in'}>
      <button class="ui grey button">Log in</button>
    </Link>

    <Link to={'/sign-up'}>
      <button class="ui grey button">Sign up</button>
    </Link>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
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