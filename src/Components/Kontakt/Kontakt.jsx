import React from 'react';
import './kontakt.scss';
import SLogo from '../../assets/images/s-logo.png';

function Kontakt(props) {
    return (
        <>
            <section id="kontakt-section">
                <div className="container">
                    <div className="content-wrap d-flex justify-content-between rounded">
                        <div className="left">
                            <div className="content">
                                <h1>Kontakt</h1>
                                <h4>designvalley.</h4>
                                <p>Tanore Rajshahi, Bangladesh</p>
                                <span>
                                    Call: +880 0132 176 4096 <br/>
                                    Mail: contat.roshannafiz@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className="right text-end">
                            <div className="s-logo">
                                <img src={SLogo} alt="SLogo"/>
                            </div>
                            <div className="content">
                                <p>
                                    Rufen Sie uns gerne an oder schreiben<br/> Sie uns für ein erstes <b>kostenloses</b><br/> Beratungs-/Kennenlerngespräch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Kontakt;