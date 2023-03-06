import React from 'react';
import './projekte.scss'
import ProjekteImage from '../../assets/images/laptop-knowledge.png'

function Projekte(props) {
    return (
        <>
            <section id="projekte-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5">
                            <div data-aos="fade-right" data-aos-duration="2000" className="image">
                                <img src={ProjekteImage} className="img-fluid" alt="projekte"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mt-5">
                            <div data-aos="fade-left" data-aos-duration="2000" className="content-area text-end">
                                <h1>projekte.</h1>
                                <h4>sieh dir einige unserer coolsten projekte an.</h4>
                                <p>
                                    Scrolle ein wenig runter und schaue dir an, was wir alles für unsere Kunden auf die
                                    Beine gestellt haben. Von futuristischen Ideen bis hin zu knallharten Umsetzungen -
                                    wir haben bewiesen, dass wir immer einen Schritt voraus sind. Schau es dir an und
                                    lass dich von unseren Projekten inspirieren.
                                </p>
                                <button className="btn-blue">Zum Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projekte;