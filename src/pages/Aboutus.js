import React from "react";
import { Link } from 'react-router-dom';

function Aboutus(){
    return(
        <section>
            <div classname="container">
                <div classname="row">
                    <div classname="col-md-4">
                        <h6>Company Info</h6>
                        <hr />
                        <p>
                            An unique dining experience and authentic World cuisine. Taste every moment!
                        </p>
                    </div>
                    <div classname="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/"> Home</Link> </div>
                        <div><Link to="/about"> About Us </Link> </div>
                        <div><Link to="/contact"> Contact Us </Link> </div>
                        <div><Link to="/"> Blog </Link> </div>
                    </div>
                    <div classname="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p>1984 E Katelina Ave, Araheim, California, USA</p></div>
                        <div><p>Telephone 93719-3382</p></div>
                        <div><p>Telefhone 94197-4524</p></div>
                        <div><p>Email: lilbits@meet.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}  

export default Aboutus;