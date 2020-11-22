import React from 'react';

function Footer(props) {
    return(
        <footer className="site-footer ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 pl-5">
                    <h5>Y-City Kitty</h5>
                    <h6>For coffee. For cats. For community.</h6><br />
        
                    <h5>Hours</h5>
                    <p>Cat Lounge: 12 pm - 5 pm</p>
                    <p>Dining Room: 9 am - 5 pm</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5>Contact Us</h5>
                        <i className="fa fa-phone fa-lg text-white fa-fw" /><a href="tel:7401234567" className="text-white"> (740) 123-4567</a> <br />
                        <i className="fa fa-envelope fa-lg text-white fa-fw" /><a href="mailto: email.mail" className="text-white"> Email Us</a> <br/>
                        <i className="fa fa-map fa-lg text-white fa-fw" /> 123 Linden Ave <span id="secondAddLine"> Zanesville, OH 43701</span> <br />
                    </div>
                </div>
            </div>
            <div className="footer-social text-center">
                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> {' '}
                <a className="btn btn-social-icon btn-yelp" href="http://yelp.com/"><i className="fa fa-yelp text-danger" /></a>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright: Nicole Karch </div>
        </footer>
    );
}

export default Footer;
 


