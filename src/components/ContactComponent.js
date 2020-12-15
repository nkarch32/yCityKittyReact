import React, { Component } from 'react';
import { Button, Card, CardTitle, CardBody, CardFooter, CardText, Form, FormGroup, Jumbotron, Label, Input, Col, FormFeedback } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            contactReason: '',
            message: '',
            touched: {
                firstName: false, 
                lastName: false,
                phone: false,
                email: false
            }

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    validate(firstName, lastName, phone, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = "First name must be at least 2 characters"
            } else if (firstName.length > 15) {
                errors.firstName = "First name cannot exceed 15 characters"
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = "Last name must be at least 2 characters"
            } else if (lastName.length > 15) {
                errors.lastName = "Last name cannot exceed 15 characters"
            }
        }

        const reg = /^\d+$/;
        if (this.state.phone && !reg.test(phone)) {
            errors.phone = "Phone must be 10 digits"
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = "Email should contains a @"
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'select' ? target.option : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phone, this.state.email);

        return(
            <React.Fragment>
                <Jumbotron fluid id="contactjumbo">
                        <div className="container text-center">
                            <h2 className="text-white text-shadow">Zanesville, Ohio's First and Finest Cat Cafe</h2>
                        </div>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Card className="mt-5">
                                <CardBody>
                                    <CardTitle tag="h2"> Talk to Us</CardTitle>
                                        <CardText>
                                            <i className="fa fa-phone fa-lg fa-fw" /> (740) 123-4567 <br />
                                            <i className="fa fa-envelope fa-lg fa-fw" /> <a href="mailto: email.mail" className="text-dark"> Email Us </a> <br />
                                            <i className="fa fa-map fa-lg fa-fw" /> 123 Linden Ave  Zanesville, OH 43701
                                        </CardText>
                                </CardBody>
                            </Card>

                            <Card className="blockquote mt-5">
                                <CardBody>What greater gift than the love of a cat.</CardBody>
                                <CardFooter className="blockquote-footer">Charles Dickens</CardFooter>
                            </Card>
                        </div>

                        <div className="col-lg-6 mt-5">
                            <h2>Contact Us</h2>
                            <hr />
                        
                            <div className="col-md-10">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            invalid={errors.firstName}
                                            onBlur={this.handleBlur("firstName")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                                            <Col md={10}>
                                                <Input type="text" id="lastName" name="lastName"
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                                invalid={errors.firstName}
                                                onBlur={this.handleBlur("lastName")}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.lastName}</FormFeedback>
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="phone" md={2}>Phone</Label>
                                            <Col md={10}>
                                                <Input type="tel" id="phone" name="phone"
                                                placeholder="Phone Number"
                                                value={this.state.phone}
                                                invalid={this.state.phone}
                                                onBlur={this.handleBlur("phone")}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.phone}</FormFeedback>
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                            <Col md={10}>
                                                <Input type="email" id="email" name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                invalid={this.state.email}
                                                onBlur={this.handleBlur("email")}
                                                onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="contactReason"  md={12}>Why are you contacting us today?</Label>
                                            <Col md={12}>
                                                    <Input type="select" id="contactReason" name="contactReason"
                                                    value={this.state.contactReason}
                                                    onChange={this.handleInputChange}>
                                                        <option>Cats</option>
                                                        <option>Coffee</option>
                                                </Input>    
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="message" md={12}>Your Message</Label>
                                            <Col md={12}>
                                                <Input type="textarea" id="message" name="message"
                                                value={this.state.message}
                                                onChange={this.handleInputChange} />
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                            <Col md={{size: 10, offset: 2}}>
                                                <Button type="submit" color="primary">
                                                    Send Message
                                                </Button>
                                            </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        );
    }


}

export default Contact;

/*handleImputChange function will allow React's state to change according to the input given by user. In controlled forms,
React is the single source of truth... React holds the data in its state. 

--> What I'm trying to do with const value... If the target type is select (drop-down menu), then the value will equal
the option selected. If not, the value will be the target value (whatever the user typed). I'm pretty sure I'll need
to revise this later, so I'm making note of it now!<-- 

this.setState [name]: value... This changes the state from default to whatever value the user inputted on the form. [name]: value is an example
of a computed property name. You are assigning a property tp an object. The object is "name" -- this stands for the name
of whatever part of the form -- first name, email, feedback, whatever -- the user interacts with. The colon and then "value" (the
    variable set just above the setState method) will be the updated property of the object.
    
    event.preventDefault() --> prevents page from refreshing automatically once a response is submitted
*/