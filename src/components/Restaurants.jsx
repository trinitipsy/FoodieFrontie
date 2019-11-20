import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import Text from './Text';

const Restaurants = ({ isAdmin = true }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [modalStateDelete, setModalStateDelete] = useState('');

  const handleOpen = () => {
    setModalStateDelete(true);
  };

  const handleClose = () => {
    setModalStateDelete(false);
  };

  const deleteRestaurant = (id) => {
    console.log(id);
    const response = axios.delete(
      `http://localhost:8080/restaurants/${id}`,

      { headers: { 'Content-Type': 'application/json' } }
    );
  };


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
            <button className="ui grey button">Check the menu</button>
          </Link>
          {isAdmin &&
          <Link to={`/restaurants/${id}/update`}>
            <button className="ui grey button">Update restaurant</button>
          </Link>
          }
          <Link to={`/restaurants/${id}/add-food`}>
            <button className="ui grey button">Add food</button>
          </Link>

          <Modal
            trigger={<button className="ui grey button" onClick={handleOpen}>Delete restaurant</button>}
            open={modalStateDelete}
            onClose={handleClose}
            basic
            size='small'
          >
            <Modal.Content>
              <h3>Are you sure you want to delete restaurant {name}?</h3>
            </Modal.Content>
            <Modal.Actions>
            <Button color='red' onClick={() => deleteRestaurant(id)} inverted>
              <Icon name='checkmark' /> Yes, sure
            </Button>
            <Button color='grey' onClick={handleClose} inverted>
              <Icon name='checkmark' /> No
            </Button>
            </Modal.Actions>
          </Modal>
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