import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import "./Shop.css";

const Shop = () => {

  const handleSubmit = () => { }
  const handleInputChange = () => { }

    return (
<<<<<<< HEAD
      <>
      <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleInputChange}/>
              <Button variant="outline-primary">Search</Button>
      </Form>

     </>
=======
      <Carousel />
      
     
>>>>>>> f32e026b232616a4b57256cf94425ba68a5a0082
    );
  }

const shopPage = () =>{
  return( <h5>Welcome to AFC Skate!</h5>
  )
  }

export default Shop;
 shopPage;