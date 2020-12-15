import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuDirectoryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CATS } from '../shared/cats';
import { EVENTS } from '../shared/events';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CATS,
            events: EVENTS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/menu' component={Menu} />
                    <Redirect to='/home' />
                    
                </Switch>
                <Footer />
            </div>
        );
    }


}

export default Main;