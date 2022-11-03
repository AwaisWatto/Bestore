import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaVimeoV } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';

function Navbar1() {
  return (
  
<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">
    Free Shipping over $100 & 60 days returns
  </Navbar.Brand>

  <Navbar.Collapse className="justify-content-end">
         
          <Navbar.Text>
        <FaFacebook/>
        &nbsp;
        <FaVimeoV/>
        &nbsp;
        <FaTwitter/>
        &nbsp;
       < FaInstagram/>
       &nbsp;
          </Navbar.Text>
        </Navbar.Collapse>

</Container>
</Navbar>




  );
}

export default Navbar1;