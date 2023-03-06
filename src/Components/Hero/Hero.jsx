import React from 'react';
import './hero.scss'
import {Link} from "react-scroll";

function Hero(props) {
    return (
        <>
            <section id="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div data-aos="fade-up" data-aos-duration="2000" className="hero-content">
                                <h4>Digitale Trendsetter</h4>
                                <h1>Webagentur<br/> Design Valley</h1>
                                <p>Coole Designs im digitalen Zeitalter! <br/>Wir bringen neueste Technologien und
                                    heißeste Trends zusammen.</p>
                                <div className="buttons">
                                    <Link to="letzten-section" spy={true} smooth={true} offset={-50}
                                          duration={500}>
                                        <button className="btn-blue">
                                            Portfolio
                                        </button>
                                    </Link>
                                    <button className="btn-pink ms-4">Los geht’s!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;