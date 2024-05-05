import React from "react";
import '../../styles/scss/_home-container.scss'
import { Link } from 'react-router-dom';
import SEO from "../../seo/index";

function HomeContainer() {

    return (
        <>
        <SEO title="Web Design + Development" description="Small Business Web Design + Development" name="Ritu Rawat." type="business web design" />
            <section id="home">
                <div className="homeContainer">
                    <svg viewBox="0 0 870 200" className="my-projects-title"><text textAnchor="middle" x="50%" y="65%">web design +</text></svg>
                    <svg viewBox="0 0 870 200" className="my-projects-title"><text textAnchor="middle" x="50%" y="65%">development</text></svg>
                    <p className="desc">We build hand-crafted, brand-enhancing, superior websites starting at $150/month.</p>
                    <Link to="/contact"><btn className="button actionBtn">SCHEDULE FREE CONSULTATION</btn></Link>
                </div>
            </section>
        </>
    );
};

export default HomeContainer;
