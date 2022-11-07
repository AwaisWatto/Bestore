import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import logo from './bethemestore-slider-pic1.webp' 



function Slider() {

    return (

    <Container>
    <Row>
      <Col className="p-5 m-1">
      <p className="display-2 text-center ">The Watch that has it all</p>
      <p className="fs-5 text-center ">BeTheme's is ready for your ecommerce business </p>
      </Col>

      <Col>   
      <div>
      <img src={logo}  width={600} height={500} alt="BigCo Inc. logo"/>
      </div>
    </Col>

    </Row>
  </Container>
);
}
    
    export default Slider;