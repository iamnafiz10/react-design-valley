import React from 'react';
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Projekte from "../Components/Projekte/Projekte";
import Letzten from "../Components/Letzten/Letzten";
import Leistungen from "../Components/Leistungen/Leistungen";
import Web from "../Components/Web/Web";
import Faq from "../Components/Faq/Faq";
import Kontakt from "../Components/Kontakt/Kontakt";
import Testimonial from "../Components/Testimonial/Testimonial";
import Header from "../Components/Header/Header";

function Home(props) {
    return (
        <>
            <Header/>
            <Hero/>
            <Projekte/>
            <Letzten/>
            <Leistungen/>
            <Testimonial/>
            <Web/>
            <Faq/>
            <Kontakt/>
            <Footer/>
        </>
    );
}

export default Home;