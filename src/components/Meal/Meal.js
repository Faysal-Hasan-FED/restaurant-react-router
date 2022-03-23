import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal, strMeal,strMealThumb , strInstructions} = props.meal;
    const navigate = useNavigate();

    const handleButton = () =>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title> {strMeal}</Card.Title>
          <Card.Text>
            {strInstructions.slice(0,150)}
          </Card.Text>
          <Button onClick={handleButton} variant="outline-dark">See Details</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Meal;