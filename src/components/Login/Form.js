import { Col, Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';
import React from 'react';


const LoginForm = ()=>(

<Container  >
<Form className="Loginform text-white" >
<Row form>
  <Col md={5}>
    <FormGroup>
    <Label for="Email" sm={4} >Email</Label>
    <Input type="email" name="email" id="loginEmail" placeholder="Enter registered email" />

    <Label for="password" className="mt-3" sm={4}>Password</Label>
    <Input type="password" name="password" id="loginPw" placeholder="Enter your password" />

    </FormGroup>
    <Button className="btn btn-sm btn-info mt-4" type="submit" formMethod="post" >Log In</Button>
    </Col>
    </Row>
</Form> 
</Container>

);

export default LoginForm;




