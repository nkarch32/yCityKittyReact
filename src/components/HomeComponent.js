import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { gsap } from 'gsap';

class Home extends Component {
    constructor(props){
        super(props);
        }


    

render(){
    return (
        <React.Fragment>
            <Jumbotron fluid id="heroIndex">
                    <div className="container text-center">
                        <h2 className="text-white text-shadow">Zanesville, Ohio's First and Finest Cat Cafe</h2>
                        <Button className="reserveButton"><i className="fa fa-coffee"/> Make a Reservation Today</Button>
                    </div>
            </Jumbotron>
        </React.Fragment>
    );
}
}

export default Home;
