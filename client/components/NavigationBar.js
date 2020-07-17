import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = ({ results, setResults, setSearchTerm }) => {

    const handleInputChange= async(e)=>{

      const searchValue = e.target.value;
  
      let searchData={};
      searchData.value=searchValue;
    
      setSearchTerm(searchData);
    }

    handleSubmit = (event) => {
      event.preventDefault();
      
      // axios call here or other  component?    
    
    }

  return (

    <Navbar expand ="lg" bg="light" variant="light">
    <Navbar.Brand href="/">afc Skate</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as = {Link} to="/account">Account</Nav.Link>
            <Nav.Link as = {Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as = {Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as = {Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as = {Link} to="/about">About</Nav.Link>
            <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleInputChange}/>
              <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>

  );
};

export default NavigationBar;
