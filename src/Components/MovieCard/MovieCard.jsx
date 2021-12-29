import React from 'react'
import {Card} from 'react-bootstrap'




function MovieCard({movie}) {
  console.log(movie)
    return (
        <div>
            <Card style={{ width: '20rem' , color:'#263B64'}}>
  <Card.Img variant="top" src={movie.posterUrl}style={{ width: '20rem' ,height:'20rem' }} alt="logo"  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{height:'10rem'}}>{movie.description}</Card.Text>
  </Card.Body>
  <h3>{"⭐".repeat(movie.rating)}</h3>
</Card>
            
        </div>
    )
}

export default MovieCard
