import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Button, Header, Icon, Modal } from 'semantic-ui-react';
import Text from './Text';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [modalState, setModalState] = useState('');

  const handleOpen = () => {
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
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
          <Link to={`/restaurants/update-restaurant`}>
            <button className="ui grey button">Update restaurant</button>
          </Link>
          <Link to={`/restaurants/delete-restaurant`}>
            <button className="ui grey button" >Delete restaurant</button>
          </Link>


          <Modal
            trigger={<Button onClick={handleOpen}>Delete restaurant</Button>}
            open={modalState}
            onClose={handleClose}
            basic
            size='small'
          >
            <Header icon='browser' content='Cookies policy' />
            <Modal.Content>
              <h3>Are you sure you want to delete restaurant {name}?</h3>
            </Modal.Content>
            <Modal.Actions>
            <Button color='green' onClick={() => deleteRestaurant(id)} inverted>
              <Icon name='checkmark' /> Yes, sure
            </Button>
            <Button color='green' onClick={handleClose} inverted>
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