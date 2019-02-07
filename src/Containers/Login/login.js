import React , { Component } from "react";
import "./login.css";
import { Button , FormControl , FormGroup , InputGroup , Form } from "react-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    } 

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    ValidateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    
    render () {
        return (
           <div className="Login">
           <h4 className = "loginHeading">Login</h4>
<Form onSubmit = "this.handleSubmit">
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.email}   onChange = { this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={this.state.password}  onChange = { this.handleChange} />
  </Form.Group>
  <Button variant="primary" type="submit" disabled = {!this.ValidateForm()}>
    Login
  </Button>
</Form>
           </div> 
        )
    }
}