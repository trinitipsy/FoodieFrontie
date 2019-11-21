import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import axios from 'axios';
import Text from './Text';
import { Link } from '@reach/router';

const RestaurantDetails = ({ restaurantId }) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState({ foods: [] });
  const [modalStateDelete, setModalStateDelete] = useState('');

  const addItem = (food) => {
    cart.foods.push(food);
    setCart({ foods: cart.foods });
  };

  const clearAllItems = () => {
    setCart({ foods: [] });
  };

  const createOrder = () => {
    const order = {
      foodIds: cart.foods.map((f) => f.id),
      deliveryAddress: '<unknown>'
    };

    const response = axios.post(
      'http://localhost:8080/orders',
      order,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(({ data }) => {
      alert(`Order created with id=${ data.id }`);
      clearAllItems();
    });
  };

  const fetchRestaurant = async () => {
    const { data } = await axios(`http://localhost:8080/restaurants/${restaurantId}`);
    setRestaurant(data);
    setMenu(data.menu);
  };

  useEffect(() => {
    fetchRestaurant();
  }, [cart]);

  const handleOpen = () => {
    setModalStateDelete(true);
  };

  const handleClose = () => {
    setModalStateDelete(false);
  };
  const deleteFood = (id) => {
    console.log(id);
    const response = axios.delete(
      `http://localhost:8080/foods/${id}`,

      { headers: { 'Content-Type': 'application/json' } }
    );
    setModalStateDelete(false);
  };

  return (
    <Fragment>
      <Text fontSize={48}>{restaurant.name}</Text>
      <Text>{restaurant.description}</Text>

      <Text>
        ================================== MENU ==================================
            </Text>
      {
        menu.map((food, index) => {
          return (
            <Fragment key={`restoran-${index}`}>
              <Text>{food.name}</Text>
              <Text>{food.price}</Text>
              <button class="ui grey button" onClick={() => addItem(food)}>Add to cart</button>

              <Link to={`/restaurants/${food.id}/update-food`}>
                <button class="ui grey button">Update food</button>
              </Link>

            <Modal
                trigger={<button className="ui grey button" onClick={handleOpen}>Delete food</button>}
                open={modalStateDelete}
                onClose={handleClose}
                basic
                size='small'
              >
                <Modal.Content>
                  <h3>Are you sure you want to delete food {food.name}?</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red' onClick={() => deleteFood(food.id)} inverted>
                    <Icon name='checkmark' /> Yes, sure
                  </Button>
                  <Button color='grey' onClick={handleClose} inverted>
                    <Icon name='checkmark' /> No
                  </Button>
                </Modal.Actions>
              </Modal>
            </Fragment>
          )
        })
      }

      <Text>
        ================================== CART ==================================
            </Text>

      {
        cart.foods.map((food, index) => {
          return (
            <Fragment key={`order-${index}`}>
              <h2>{food.name} | {food.price}</h2>
            </Fragment>
          )
        })
      }
      <button onClick={() => createOrder()}>Submit Order</button>

    </Fragment>
  )
};

export default RestaurantDetails;