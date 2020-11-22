import React, { Component } from 'react';
import { Jumbotron, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }; //part one of the component -- props, state data, any this bindings for functions later on in the component -- is finished

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    } //part two of the component -- the initialized functions -- is finished

    render() {
        return(
            <React.Fragment>
                <Jumbotron id="headerJumbo" fluid>
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <h1>Y-City Kitty</h1>
                                <h2>Cats, Community, Coffee</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar color="light" sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">Meet the Kitties</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>

        )
    };
}


export default Header;

