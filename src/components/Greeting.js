import React from 'react';
import styled from 'styled-components';
import { Image, Grid } from 'semantic-ui-react';
import Text from './Text';

const Greeting = () => (
  <StyledWrapper>
    <Grid>
      <Grid.Column width={4}>
        <Image className="logo" circular src='logo-cropped.jpg' />
      </Grid.Column>
      <Grid.Column width={9}>
        <Text fontSize={120}>FoodSetGo</Text>
        <Text>Welcome to the unique online service for easy and fast ordering
             of food <br />from the best local restaurants. <br />Forget about waiting
             on your phone connection, outdated flyers, and wrong orders! <br />
          Enjoy the taste of the best food ...
                </Text>
      </Grid.Column>
    </Grid>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  margin: 0;
  margin-bottom: 50px;
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
   
  .logo {
    height: 30%;
    width: 30%;
  }
`;

export default Greeting;