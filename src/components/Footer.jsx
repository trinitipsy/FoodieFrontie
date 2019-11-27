import React, { useEffect, useState, Fragment } from 'react';
import { Icon, Grid, Statistic } from 'semantic-ui-react';
import Text from './Text';
import styled from 'styled-components';
import axios from '../API/AxiosInstance';

const Footer = () => {
  const [foodSum, setFoodSum] = useState({
    count: 0
  });

  const fetchFoodSum = async () => {
    const { data } = await axios('foods/count');
    setFoodSum(data);
  };

  useEffect(() => {
    fetchFoodSum();
  }, []);

  return (
  <StyledWrraper>
    <Statistic.Group widths='four'>
      <Statistic>
        <Statistic.Value><Text fontSize={30} >22</Text></Statistic.Value>
        <Text>restaurants</Text>
      </Statistic>
      <Statistic>
        <Text fontSize={30}>3000</Text>
        <Text>Signups</Text>
      </Statistic>
      <Statistic>
  <Text fontSize={30}><Icon name='food' />{foodSum.count}</Text>
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