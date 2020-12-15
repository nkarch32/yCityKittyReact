//uncontrolled form example
import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class CallToActionButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalOpen: false,
//     };

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  //isModalOpen keeps track of whether modal is opened or closed

  state = {
      isModalOpen: false
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit = (event) => {
    alert(`First Name: ${this.firstName.value}; Last Name: ${this.lastName.value}; Number of Guests: ${this.guests.value}; 
        Date and Time: ${this.dateTime.value}`);
    this.toggleModal();
    event.preventDefault();
  }

  //this method allows the modal to be toggled... bind this method in the constructor after you make it.

  render() {
    return (
      <React.Fragment>
        <Button className='reserveButton' onClick={this.toggleModal}>
          <i className='fa fa-coffee' /> Make a Reservation Today
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Reserve a cup with the kitties!
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor='firstName'>First Name </Label>
                <Input
                  type='text'
                  id='firstName'
                  name='firstname'
                  innerRef={(input) => (this.firstName = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  type='text'
                  id='lastName'
                  name='lastname'
                  innerRef={(input) => (this.lastName = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='guests'>Number of Guests</Label>
                <Input
                  type='select'
                  id='guests'
                  name='guests'
                  innerRef={(input) => (this.guests = input)}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='dateTime'>Reserve a Date and Time</Label>
                <Input
                  type='datetime-local'
                  id='dateTime'
                  name='dateTime'
                  innerRef={(input) => (this.dateTime = input)}
                />
              </FormGroup>
              <Button type='submit' value='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

//isOpen and toggle are two attributes that come with reactstrap. isOpen={this.state.isModalOpen} sets the modal to not open; toggle={this.toggleModal} allows
//modal to be toggled; adding the toggle attribute to ModalHeader allows for a way to close the modal after it's been opened
//add the event handler onClick={this.toggleModal} to enable users to click and toggle

export default CallToActionButton;
