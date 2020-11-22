import React from 'react';
import { Jumbotron, Container, Row, Button, CardGroup, Card, CardImg, CardFooter, CardTitle, CardHeader, CardBody } from 'reactstrap';
import CallToActionButton from './CallToActionBtn'


//Note: Functional component cannot hold state or lifecycle methods.

function Home() {
 
    return (
        <React.Fragment>
            <Jumbotron fluid id="heroIndex">
                    <div className="container text-center">
                        <h2 className="text-white text-shadow">Zanesville, Ohio's First and Finest Cat Cafe</h2>
                        <CallToActionButton />
                    </div>
            </Jumbotron>
            <div className="container text-center mt-5">
                <h2>Relax. Take a coffee break. Make some new (feline) friends.</h2>
                <h3>Y-City Kitty is Zanesville, Ohio's home for all things coffee and cats.</h3>
            </div>
            <div className="home-card-groups">
                <Container>
                    <Row>
                        <CardGroup className="mb-5">
                            <Card>
                                <CardImg src={'http://placekitten.com/150/75'} className="fluid" alt="sleepy fluffy kitty" />
                            </Card>
                            <Card>
                            <CardHeader>
                                <CardTitle className="text-center">
                                    <h3>Cats</h3>
                                </CardTitle>
                            </CardHeader> 
                            <CardBody>
                                <p>Slap the dog because cats rule meow yet climb leg, cereal boxes make for five star accommodation furrier 
                                and even more furrier hairball or relentlessly pursues moth cat snacks. Ooooh feather moving feather!</p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="button">See Current Cats</Button>
                            </CardFooter>
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>
                        <CardGroup className="mt-5 mb-5">
                            <Card>
                            <CardHeader>
                                <CardTitle className="text-center">
                                    <h3>Coffee</h3>
                                </CardTitle>
                            </CardHeader> 
                            <CardBody>
                                <p>Coffee medium foam mocha est cortado organic single shot barista carajillo americano. Strong irish medium robusta spoon,
                                dark con panna cortado and aromatic. Viennese spoon, froth eu dark beans kopi-luwak. Cup plunger pot sugar white wings single 
                                origin to go latte.</p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="button" >Explore the Menu</Button>
                            </CardFooter>
                            </Card>
                            <Card>
                                <CardImg src={'http://placekitten.com/150/75'} className="fluid" alt="sleepy fluffy kitty" />
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>
                        <CardGroup className="mt-5 mb-5">
                            <Card>
                                <CardImg src={'http://placekitten.com/150/75'} className="fluid" alt="sleepy fluffy kitty" />
                            </Card>
                            <Card>
                            <CardHeader>
                                <CardTitle className="text-center">
                                    <h3>Community</h3>
                                </CardTitle>
                            </CardHeader> 
                            <CardBody>
                                <p>Slap the dog because cats rule meow yet climb leg, cereal boxes make for five star accommodation furrier 
                                and even more furrier hairball or relentlessly pursues moth cat snacks. Ooooh feather moving feather!</p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="button">Learn More About Us</Button>
                            </CardFooter>
                            </Card>
                        </CardGroup>
                    </Row>
                </Container>
            </div>
            
        </React.Fragment>
    );
}


export default Home;

