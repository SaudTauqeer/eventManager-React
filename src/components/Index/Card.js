import React from 'react';
import { Card, 
  CardImg,
  CardTitle,
  CardText, 
  CardGroup,
  CardBody,
  Row, 
  Col, 
  Container
  } from 'reactstrap';
  import {Link} from "react-router-dom";

  const imageUrl1 = require('../images/1.jpg');
  const imageUrl2 = require(`../images/2.jpg`);

  const CardContent = (props) => {
    return (
      <Container>
        <Row>
        <Col md="6"  className="mb-5">
      <CardGroup>
        <Card>
          <CardImg top width="100%" src={imageUrl1} />
          <CardBody>
            <CardTitle>Never miss an event</CardTitle>
            <CardText>
              Join us for free and manage your events like never before.
              Get reminded of events via email .
            </CardText>
            <a style={{ textDecoration: "none" }} className="btn-lg btn-success btn-block text-center" href="/register" >Register</a>
          </CardBody>
        </Card>
        </CardGroup>
        </Col>

        <Col md="6"  className="mb-5">
     <CardGroup>
        <Card>
          <CardImg top width="100%" src={imageUrl2} />
          <CardBody>
            <CardTitle>Already registered on our site?</CardTitle>
            <CardText>Login here to access your events and manage everything via the dashboard.
            </CardText>
            <a style={{ textDecoration: "none" }} className="btn-lg btn-info btn-block text-center" href="/login" >Login</a>
          </CardBody>
        </Card>
        </CardGroup>
        </Col>
        </Row>
        </Container>
)};

export default CardContent;