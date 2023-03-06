import React from 'react';
import './faq.scss';

function Faq(props) {
    return (
        <>
            <section id="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h1>faq.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 mt-5">
                            <div className="left-content">
                                <h5>falls noch fragen offen sein sollten.</h5>
                                <h4>Findest du hier die Antwort.</h4>
                                <p>… und falls wir deine frage hier noch <b>nicht</b> beantwortet<br/> haben, melde dich
                                    gerne bei uns:</p>
                                <a href="!#">
                                    info@design-valley.de
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-7 mt-5">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            Was macht DesignValley so besonders?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Wo befindet sich Ihr Team und wer sind die Menschen, die an meinem Projekt
                                            arbeiten werden?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            Können Sie uns einen Einblick in Ihren Webdesign-Prozess geben?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFore"
                                                aria-expanded="false" aria-controls="collapseFore">
                                            Wie berechnen Sie die Kosten für ein Webdesign-Projekt?
                                        </button>
                                    </h2>
                                    <div id="collapseFore" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                            Bieten Sie auch Wartungsdienste für bereits bestehende Websites an?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                            Wie kann ich ein Angebot für mein Projekt anfordern?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                            Für welche Branchen oder Kundentypen haben Sie bereits erfolgreich
                                            gearbeitet?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                aria-expanded="false" aria-controls="collapseEight">
                                            Können Sie auch bestehende Websites verbessern oder reparieren?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                aria-expanded="false" aria-controls="collapseNine">
                                            Werden Sie bei meinem Projekt auch Suchmaschinenoptimierung durchführen?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse"
                                         aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                aria-expanded="false" aria-controls="collapseTen">
                                            Verwenden Sie bei Ihren Webdesign-Projekten Vorlagen oder sind alle Designs
                                            individuell?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                aria-expanded="false" aria-controls="collapseEleven">
                                            Können Sie auch digitale Marketingdienstleistungen anbieten?
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                aria-expanded="false" aria-controls="collapseTwelve">
                                            Mit welchen Website-Plattformen haben Sie Erfahrung?
                                        </button>
                                    </h2>
                                    <div id="collapseTwelve" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThirteen"
                                                aria-expanded="false" aria-controls="collapseThirteen">
                                            Arbeiten Sie auch mit WordPress-Vorlagen?
                                        </button>
                                    </h2>
                                    <div id="collapseThirteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFourteen"
                                                aria-expanded="false" aria-controls="collapseFourteen">
                                            Mit welchen eCommerce-Plattformen haben Sie Erfahrung?
                                        </button>
                                    </h2>
                                    <div id="collapseFourteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mt-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFifteen"
                                                aria-expanded="false" aria-controls="collapseFifteen">
                                            Arbeiten Sie auch mit CRM-Systemen zusammen?
                                        </button>
                                    </h2>
                                    <div id="collapseFifteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Mit über 20 Jahren auf dem wettbewerbsstärksten Webdesign-Markt in Kanada
                                            haben wir uns als eines der besten Webdesign-Unternehmen in Toronto
                                            etabliert. Genau aus dem Grund sind wir so unglaublich freundlich. HipHip
                                            Hurray.
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

export default Faq;