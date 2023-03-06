import React from 'react';
import './letzten.scss';
import LetztenOne from '../../assets/images/letzten1.png';
import LetztenTwo from '../../assets/images/letzten2.png';
import LetztenThree from '../../assets/images/letzten3.png';

function Letzten(props) {
    return (
        <>
            <section id="letzten-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="heading">
                                <h1>letzten projekte.</h1>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-9 col-sm-6 col-md-4 mt-0">
                            <div className="img-box">
                                <img src={LetztenOne} className="img-fluid" alt="LetztenOne"/>
                                <div className="tag">
                                    <h3>01</h3>
                                </div>
                            </div>
                            <div className="name">
                                <h4>SPH-Media</h4>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-9 col-sm-6 col-md-4 mt-5">
                            <div className="img-box">
                                <img src={LetztenTwo} className="img-fluid" alt="LetztenTwo"/>
                                <div className="tag">
                                    <h3>02</h3>
                                </div>
                            </div>
                            <div className="name">
                                <h4>Zahnarzt Winkelmann</h4>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-9 col-sm-6 col-md-4 mt-5 pt-5">
                            <div className="img-box">
                                <img src={LetztenThree} className="img-fluid" alt="LetztenThree"/>
                                <div className="tag">
                                    <h3>03</h3>
                                </div>
                            </div>
                            <div className="name">
                                <h4>Fotografen VogelView</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Letzten;