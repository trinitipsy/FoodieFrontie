import React, { useEffect, useState } from 'react';
import { Icon, Statistic } from 'semantic-ui-react';
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
          <Text>users</Text>
        </Statistic>
        <Statistic>
          <Text fontSize={30}><Icon name='food' />{foodCount.count}</Text>
          <Text>different foods</Text>
        </Statistic>
      </Statistic.Group>
      <div className="copyright">
        <Text fontSize={10} >Copyright © 2019-2019 FoodSetGo.com. All Rights Reserved.</Text>
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