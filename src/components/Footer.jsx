import React, { useEffect, useState, Fragment } from 'react';
import { Icon, Grid, Statistic } from 'semantic-ui-react';
import Text from './Text';
import styled from 'styled-components';
import axios from '../API/AxiosInstance';

const Footer = () => {
  const [foodCount, setFoodCount] = useState({
    count: 0
  });
  const [restaurantCount, setRestaurantCount] = useState({
    count: 0
  });
  const [userCount, setUserCount] = useState({
    count: 0
  });

  const fetchFoodCount = async () => {
    const { data } = await axios('foods/count');
    setFoodCount(data);
  };

  const fetchRestaurantCount = async () => {
    const { data } = await axios('restaurants/count');
    setRestaurantCount(data);
  };

  const fetchUserCount = async () => {
    const { data } = await axios('users/count');
    setUserCount(data);
  }

  useEffect(() => {
    fetchFoodCount();
    fetchRestaurantCount();
    fetchUserCount();
  }, []);

  return (
    <StyledWrraper>
      <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value><Text fontSize={30} >{restaurantCount.count}</Text></Statistic.Value>
          <Text>restaurants</Text>
        </Statistic>
        <Statistic>
          <Text fontSize={30}>{userCount.count}</Text>
          <Text>Signups</Text>
        </Statistic>
        <Statistic>
          <Text fontSize={30}><Icon name='food' />{foodCount.count}</Text>
          <Text>meals</Text>
        </Statistic>
      </Statistic.Group>
      <div className="copyright">
        <Text fontSize={10} >Copyright © 2006-2019 FoodSetGo.com - a PLOTUN service. All Rights Reserved.</Text>
      </div>

    </StyledWrraper>
  )
}

const StyledWrraper = styled.div`
  padding: 100px;
  padding-bottom:20px;
  .copyright{
    margin-top: 80px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
export default Footer;