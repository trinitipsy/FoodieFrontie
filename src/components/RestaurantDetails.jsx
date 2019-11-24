import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import { Link } from '@reach/router';
import AuthService from '../service/AuthService';
import { Button } from 'semantic-ui-react';

const RestaurantDetails = ({ restaurantId, navigate }) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState({ foods: [] });

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
      alert(`Order created with id=${data.id}`);
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

  const isAdmin = AuthService.getRole() == 'ROLE_ADMIN';

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
              <Button inverted color='grey' size='massive' onClick={() => addItem(food)} >Add to cart</Button>

              {isAdmin &&
                <Link to={`/restaurants/${food.id}/update-food`}>
                  <Button inverted color='grey' size='massive'>Update food</Button>
                </Link>
              }

              {isAdmin &&
                <Link to={`/restaurants/${food.id}/delete-food`}>
                  <Button inverted color='grey' size='massive'>Delete food</Button>
                </Link>
              }
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
              <Text>{food.name} | {food.price}</Text>
            </Fragment>
          )
        })
      }
      <Button inverted color='grey' size='massive' onClick={() => createOrder()} >Submit order</Button>

    </Fragment>
  )
};

export default RestaurantDetails;