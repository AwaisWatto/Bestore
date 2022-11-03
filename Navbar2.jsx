import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import logo from './bethemestore.png' 
import { InputGroup } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart} from 'react-icons/fa';
import {FaShoppingCart } from 'react-icons/fa';

function Navbar2() {

      return (

        <Navbar bg="light">  

        <Container>  
          <Navbar.Brand href="#home">  
            <img  
              src={logo}  
              width="120"  
              height="27"  
              className="d-inline-block align-top"  
              alt="Brand logo"  
            />  
          </Navbar.Brand>  


          <InputGroup tag="form" className='d-flex w-auto mb-8' >
          <input className='form-control ' placeholder="Enter Your Search" aria-label="Search" type='Search' />
        </InputGroup>

        <Navbar.Collapse className="justify-content-end">
         <Navbar.Text>
       <FaRegUser/>
       &nbsp;
       <FaRegHeart/>
       &nbsp;
       <FaShoppingCart/>
       &nbsp;
         </Navbar.Text>
       </Navbar.Collapse>
       &nbsp;
       
  <select>
       <option value="British"> abc</option>
        <option value="lime">abc</option>
        <option selected value="coconut">abc</option>
        <option value="mango">abc</option>
  </select>


        </Container>  
        </Navbar>  

        ); 
    
}

export default Navbar2;