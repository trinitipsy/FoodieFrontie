import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import AuthService from '../service/AuthService';

const Restaurants = ({ navigate }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios('http://localhost:8080/restaurants');
      setRestaurants(data);
    }
    fetchRestaurants();
  }, []);

  const isAdmin = AuthService.getRole() == 'ROLE_ADMIN';

  return restaurants.map(({ id, name, description, email }) => (
    <StyledWrapper>
      <Grid>
        <Grid.Column width={16}>
          <Text fontSize={48}>{name}</Text>
          <Text>{description}</Text>
          <Text>{email}</Text>
          <Button.Group vertical>
            <Link to={`/restaurants/${id}`}>
              <Button inverted color='black' size='big'>Check the menu</Button>
            </Link>
            {isAdmin &&
              <Link to={`/restaurants/${id}/update-restaurant`}>
                <Button inverted color='black' size='big'>Update restaurant</Button>
              </Link>
            }
            {isAdmin &&
              <Link to={`/restaurants/${id}/add-food`}>
                <Button inverted color='black' size='big'>Add food</Button>
              </Link>
            }
            {isAdmin &&
              <Link to={`/restaurants/${id}/delete`}>
                <Button inverted color='black' size='big'>Delete restaurant</Button>
              </Link>
            }
          </Button.Group>
        </Grid.Column>
      </Grid>


    </StyledWrapper>
  ));
}


const StyledWrapper = styled.div`
  background-image: url("sparkle.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 80px;
  `;

export default Restaurants;