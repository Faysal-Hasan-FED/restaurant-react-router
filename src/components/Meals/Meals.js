import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText , setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data?.meals));
    },[searchText])

    const handleSearch = (event) =>{
       setSearchText(event.target.value);
    }
    return (
        <Container className='mt-3'>
            
            <div className='text-center my-3'>
            <input onChange={handleSearch} className='rounded w-75' type="text" placeholder='Search your food here' />
            </div>

            <Row xs={1} md={3} className="g-4">

            {
                meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal> )
            }
</Row>

           
            
        </Container>
    );
};

export default Meals;