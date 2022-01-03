import React from "react";
import {Link} from "react-router-dom";

const FooterCallToAction = () => {
    return (
        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-12 col-sm-8">
                            <h3>Remaining essentially unchanged.</h3>
                            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <Link to="/contact-us" className="btn btn-medium btn-default pull-right">Know More <i className="lnr lnr-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </section>);
}

export default FooterCallToAction;