import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import Text from './Text';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios('http://localhost:8080/restaurants');
      setRestaurants(data);
    }
    fetchRestaurants();
  }, []);

  return restaurants.map(({ id, name, description, email }) => (
    <StyledWrapper>
      <Grid>
        <Grid.Column width={16}>
          <Text fontSize={48}>{name}</Text>
          <Text>{description}</Text>
          <Text>{email}</Text>
          <Link to={`/restaurants/${id}`}>
            <button class="massive ui button">Check the menu</button>
          </Link>
        </Grid.Column>
      </Grid>
    </StyledWrapper>
  ));
}

const StyledWrapper = styled.div`
  background-image: url("https://image.freepik.com/free-photo/dark-texture-chalk-board-black-board_28629-1027.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 80px;
  `;
  
export default Restaurants;