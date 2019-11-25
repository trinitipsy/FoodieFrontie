import React, { Fragment, useEffect, useState } from 'react';
import axios from '../API/AxiosInstance';
import Text from './Text';
import { Link } from '@reach/router';
import AuthService from '../service/AuthService';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const RestaurantDetails = ({ restaurantId }) => {
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
      'orders',
      order,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(({ data }) => {
      alert(`Order created with id=${data.id}`);
      clearAllItems();
    });
  };

  const fetchRestaurant = async () => {
    const { data } = await axios(`restaurants/${restaurantId}`);
    setRestaurant(data);
    setMenu(data.menu);
  };

  useEffect(() => {
    fetchRestaurant();
  }, [cart]);

  const isAdmin = AuthService.getRole() == 'ROLE_ADMIN';

  return (
    <StyledWrapper>
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
              {!isAdmin &&
                <Button inverted color='black' size='big' onClick={() => addItem(food)} >Add to cart</Button>
              }
              {isAdmin &&
                <Link to={`/restaurants/${food.id}/update-food`}>
                  <Button inverted color='black' size='big'>Update food</Button>
                </Link>
              }

              {isAdmin &&
                <Link to={`/restaurants/${food.id}/delete-food`}>
                  <Button inverted color='black' size='big'>Delete food</Button>
                </Link>
              }
            </Fragment>
          )
        })
      }
      {!isAdmin &&
        <Text>
          ================================== CART ==================================
            </Text>
      }
      {
        cart.foods.map((food, index) => {
          return (
            <Fragment key={`order-${index}`}>
              <Text>{food.name} | {food.price}</Text>
            </Fragment>
          )
        })
      }
      {!isAdmin &&
        <Button inverted color='black' size='big' onClick={() => createOrder()} >Submit order</Button>
      }
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  background-color: #11111;
  padding: 50px;
  text-align: center;
  background-image: url('greeting.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  `;


export default RestaurantDetails;