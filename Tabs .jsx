import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './Tabs.css';

import Slider from './Slider';

function Tabs() {
    return (

        
      <Tab.Container id="left-tabs-example " defaultActiveKey="first">

        <Row>
        <Tab.Content>
              <Tab.Pane eventKey="first">
                <Slider />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Slider />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Slider />
              </Tab.Pane>
            </Tab.Content>
        
        
            <Nav  className="mb-3" justify>
              <Nav.Item >
                <Nav.Link eventKey="first" className="first">The Watch</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="Pills" eventKey="second">The Blast Of Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="Pills" eventKey="third">Small and Powerfull</Nav.Link>
              </Nav.Item>
            </Nav>
    
       
        </Row>
      </Tab.Container>
    );
  }
  
  export default Tabs;