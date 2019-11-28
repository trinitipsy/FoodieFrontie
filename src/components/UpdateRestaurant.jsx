import React, { useState, useEffect } from 'react';
import axios from '../API/AxiosInstance';
import Text from './Text';
import styled from 'styled-components';
import { Form, Grid, Button } from 'semantic-ui-react';


const UpdateRestaurant = ({ restaurantId, navigate }) => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    email: '',
    address: '',
    description: ''
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      const { data } = await axios(`restaurants/${restaurantId}`);
      setRestaurant(data);
    }
    fetchRestaurant();
    console.log(restaurant.name)
  }, []);

  const submit = (event) => {
    const response = axios.put(
      `restaurants/${restaurantId}`,
      restaurant,
      { headers: { 'Content-Type': 'application/json' } }
    );
    response
      .then(() => {
        window.location.href="/restaurants";
    // navigate('/restaurants');
      })
      .catch(err => {
        alert(`Error occurred: ${err.message}`);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    
    restaurant[event.target.name] = event.target.value;
    setRestaurant(restaurant);
  };

  return (
    <StyledWrapper class="ui form">
      <form onSubmit={submit}>
        <Grid centered columns={3}>
          <Grid.Column>
            <Text>Be careful! <br />You are about to update a restaurant info in database.</Text>
            <Form success>
              <Form.Input type="text" name='name' onChange={handleChange} defaultValue={restaurant.name} />
              <Form.Input type="text" name='email' onChange={handleChange} defaultValue={restaurant.email} />
              <Form.Input type="text" name='address' onChange={handleChange} defaultValue={restaurant.address} />
              <Form.Input type="text" name='description' onChange={handleChange} defaultValue={restaurant.description} />
              <Button inverted color='black' size='big'>Update restaurant</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </form>
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

export default UpdateRestaurant;
