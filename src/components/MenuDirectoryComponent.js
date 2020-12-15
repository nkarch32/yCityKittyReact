import React, { Component } from 'react';
/*import { Button, Jumbotron, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImg, CardText, CardImgOverlay, CardTitle, 
    Container, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';*/
import  { MENUOPTIONS } from '../shared/menuOptions';
import Drinks from '../images/iceddrinks.jpg'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOptions: MENUOPTIONS,
        };
    }

   render() {
       
           const menuDirectory = this.state.menuOptions.map(menuOptions => {
               const {image, id, name, description} = menuOptions

            console.log('menu options', image);
               return (
                   <div key={id} className='col'>
                       <img src={image} alt={name} />
                       <h2>{name}</h2>
                       <p>{description}</p>
                   </div>
               );

           });
          
           return (
               <div className='container'>
                   <div className='row'>
                       {menuDirectory}
                   </div>
               </div>
           )
    
   }
}






export default Menu;