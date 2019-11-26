import React, { useEffect, useState, Fragment } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from '../API/AxiosInstance';
import { Grid, Button } from 'semantic-ui-react';
import Text from './Text';
import AuthService from '../service/AuthService';

const Restaurants = ({ navigate }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios('restaurants');
      setRestaurants(data);
    }
    fetchRestaurants();
  }, []);

  const isAdmin = AuthService.getRole() == 'ROLE_ADMIN';

  return (
    <StyledWrapper>
      <Grid>
      <Grid.Column width={16}>
      {isAdmin &&
      <Grid.Row className="row">
          <Link to="add" ><Button inverted color="black" floated="right" size="massive">Add restaurant</Button></Link>
          </Grid.Row>
      }
      {
        restaurants.map(({ id, name, description, email }) => {
          return (
              <Fragment>
                <Grid.Row>
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
                </Grid.Row>
                </Fragment>
          )
        }
        )
      }
       </Grid.Column>
    </Grid>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  background-image: url("sparkle.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	padding: 80px;
  .row{
    padding-bottom: 140px;
  }
  `;

export default Restaurants;