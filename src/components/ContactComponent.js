import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
            contactReason: '',
            feedback: ''

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }


    handleImputChange(event) {
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
        
        return(
            <div className="container">
                <div className="row">

                </div>
            </div>
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
    
FOR 11/24:
--> left off at line 46 (beginning to create form)
--> left off at 5:05, "Exercise: Controlled Forms" on week 4*/