import React from 'react'
import {Nav,Navbar,FormControl,Container} from 'react-bootstrap'
import ReactStars from 'react-star-rating-component';


function MyNav({handleTitle , handleStar}) {
    const ratingChanged = (newRating) => {
      handleStar =(newRating);
        console.log(newRating);
      };

     const handleChange =(e)=>{
      handleTitle(e.target.value)
         };

    
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <FormControl type="search"
    placeholder="type your search here"
    onChange={handleChange}
    
    />


    </Container>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
  />

  </Navbar>
            
        </div>
    )
}

export default MyNav
