
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealId} = useParams({});
    const [mealDetail , setMealDetail] = useState({});
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data=> setMealDetail(data.meals[0]))
    },[])

    const {strMeal , strMealThumb,strYoutube,strArea,strInstructions} = mealDetail;


    
    return (
        <Container className='text-center'>
            <div className='my-5 border shadow rounded'>
  <Card.Img variant="top" className='w-50' src={strMealThumb} />
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <h2>{strArea} Food</h2>
    <Card.Text>
      {strInstructions}
    </Card.Text>
    <Button variant="outline-dark">
    <a className='text-decoration-none fw-bold' target="_blank" href={strYoutube} >See Recipe Video</a>
    </Button>
    
  </Card.Body>
</div>
            
        </Container>
    );
};

export default MealDetail;