
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantDetails = ({restaurantId}) => {
    const[RestaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            const { data } = await axios(`http://localhost:8080/restaurants/${restaurantId}`);
            setRestaurantDetails(data);
        }
        fetchRestaurantDetails();
    }, []);



    return RestaurantDetails.map(({name, description, price}) => {
        return (
            <Fragment>
            <h1>{name}</h1>
            <h4>{description}</h4>
            <h4>{price}</h4>
            </Fragment>
        )
    })
 }



// const restaurant_RestaurantDetails = {
//     "id": 1,
//     "name": "MarcoPolo",
//     "email": "nesto@gmail.com",
//     "address": "Desanke Maksimovic 18",
//     "description": "most delicious food",
//     "RestaurantDetails": [
//         {
//             "id": 6,
//             "name": "pizza",
//             "price": 7.5,
//             "description": "pizza capricoza"
//         },
//         {
//             "id": 8,
//             "name": "pizza",
//             "price": 5.5,
//             "description": "pizza capricoza"
//         },
//         {
//             "id": 10,
//             "name": "yellow breakfast",
//             "price": 3,
//             "description": "omelet with vegetable"
//         },
//         {
//             "id": 11,
//             "name": "beef steak",
//             "price": 27,
//             "description": "beef steak"
//         }
//     ]
// }
export default RestaurantDetails;