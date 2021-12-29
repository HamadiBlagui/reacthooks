import React, {useState} from 'react'
import { FormControl } from 'react-bootstrap';
import {Modal,Button} from 'react-bootstrap'


const AddMovie = ({getData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie,setNewMovie]= useState({title:"",
    description:"",
    posterUrl:"",
    rating:0


    
    })
const handleChange=(e)=>{
  setNewMovie({...newMovie , [e.target.name]: e.target.value})

}

const handleSubmit=()=> {
getData(newMovie)
handleClose()
}
    return (
        <div>
             <Button  variant="warning" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your movie</Modal.Title>
        </Modal.Header>

    <label>Title: </label>
    <FormControl type='text' name='title' onChange={handleChange} />

    <label>Description: </label>
    <FormControl type='text' name='description' onChange={handleChange} />

    <label>PosterUrl: </label>
    <FormControl type='text' name='posterUrl' onChange={handleChange} />

    <label>Rating: </label>
    <FormControl type='number' min="1" max="5" name='rating' onChange={handleChange} />
     

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default AddMovie
