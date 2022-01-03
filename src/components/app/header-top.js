import React from "react";
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (<div className="header_meta header_meta_one">
        <div className="container">
            <div className="row">
                <ul className="social">
                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-facebook-square" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-linkedin-square" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-youtube" /></a></li>
                </ul>
                <nav className="meta-login">
                    <ul>
                        <li className="clock"><i className="lnr lnr-clock" />Mon - Fri : 8:00 - 12:00</li>
                        <li className="call"><i className="lnr lnr-smartphone" />Call Us +91-9818536154</li>
                        <li><Link to="/login" className="fancybox">Login</Link></li>
                        <li><Link to="/register" className="fancybox">Signup</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>);
}

export default HeaderTop;