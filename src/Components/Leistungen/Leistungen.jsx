import React from 'react';
import './leistungen.scss';
import HandIcon from '../../assets/icons/hand.png';
import MikeIcon from '../../assets/icons/mike.png';
import SocialIcon from '../../assets/icons/social.png';

function Leistungen(props) {
    return (
        <>
            <section id="leistungen-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h1>leistungen.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 mt-5">
                            <div className="left-content">
                                <h5>das bieten wir.</h5>
                                <h4>webdesign das einen unterschied<br/> macht.</h4>
                                <p>Sollte etwas nicht direkt dabei sein, melde dich gerne
                                    direkt<br/> bei
                                    uns
                                    mit
                                    deinem Anliegen:</p>
                                <a href="!#">
                                    info@design-valley.de
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={HandIcon} className="img-fluid" alt="HandIcon"/>
                                            <h3>webdesing.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={MikeIcon} className="img-fluid" alt="MikeIcon"/>
                                            <h3>search engine optimization.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={SocialIcon} className="img-fluid" alt="SocialIcon"/>
                                            <h3>social media marketing.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={MikeIcon} className="img-fluid" alt="MikeIcon"/>
                                            <h3>sbranding.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={HandIcon} className="img-fluid" alt="HandIcon"/>
                                            <h3>copywriting.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={MikeIcon} className="img-fluid" alt="MikeIcon"/>
                                            <h3>web <br/>development.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className="col-12 col-lg-6 mt-5">
                                    <div className="box">
                                        <div className="box-head d-flex align-items-center">
                                            <img src={SocialIcon} className="img-fluid" alt="SocialIcon"/>
                                            <h3>grafik design.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Wir bieten benutzerfreundliches und ansprechendes Webdesign, das
                                                auf
                                                Ihre Bedürfnisse und Ziele abgestimmt ist.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Leistungen;