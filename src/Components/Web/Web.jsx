import React from 'react';
import './web.scss';
import WebOne from '../../assets/images/web1.png';
import WebTwo from '../../assets/images/web2.png';
import WebThree from '../../assets/images/web3.png';

function Web(props) {
    return (
        <>
            <section id="web-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h1>web design insights.</h1>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-12 col-md-6 col-lg-4 mt-5">
                            <div className="box">
                                <img src={WebOne} className="img-fluid" alt="WebOne"/>
                                <div className="content text-center mt-3">
                                    <span>SEO, Web Design | 12 min</span>
                                    <a href="#!" className="text-decoration-none">
                                        <h3 className="pb-3">Wann ist es Zeit für eine<br/> Website Überarbeitung</h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-12 col-md-6 col-lg-4 mt-5">
                            <div className="box shadow">
                                <img src={WebTwo} className="img-fluid" alt="WebTwo"/>
                                <div className="content text-center mt-3">
                                    <span>Wordpress | 18 min</span>
                                    <a href="#!" className="text-decoration-none">
                                        <h3 className="pb-3">Wie viel kostet eine professionelle WordPress-Website?</h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col-12 col-md-6 col-lg-4 mt-5">
                            <div className="box">
                                <img src={WebThree} className="img-fluid" alt="WebThree"/>
                                <div className="content text-center mt-3">
                                    <span>Ressourcen | 9 min</span>
                                    <a href="#!" className="text-decoration-none">
                                        <h3 className="pb-3">Erfolgreiches Marketing <br/>in Zeiten der Rezession</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Web;