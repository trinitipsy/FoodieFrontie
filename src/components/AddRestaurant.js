import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    address: ''
  });

  const submit = (event) => {
    const response = axios.post(
      'http://localhost:8080/restaurants/',
      restaurant,
      { headers: { 'Content-Type': 'application/json' } }
    );

    response.then(value => {
      console.log(value.data);
    });
    event.preventDefault();
  };

  const handleChange = (event) => {
    restaurant[event.target.name] = event.target.value;
    setRestaurant(restaurant);
  };

  return (
    <form onSubmit={submit}>
      <label>
        Name:
                <input type="text" name='name' onChange={handleChange} />
      </label>

      <label>
        Description:
                <input type="text" name='description' onChange={handleChange} />
      </label>

      <label>
        Address:
                <input type="text" name='address' onChange={handleChange} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
};

export default AddRestaurant;