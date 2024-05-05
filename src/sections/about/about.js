import React from "react";
import '../../styles/scss/_about.scss'
import Filler from '../../components/filler';

function About() {
    return (
        <>
            <section id="about" >
                <div className="aboutContainer">
                    <h3>Hi, I'm Ritu R.</h3>
                    <h2>Nice to meet you!</h2>
                    <p>I am the owner and developer of Ritu Rawat Web Design + Development. Developing a responsive, SEO  
                    driven website with a clean and cohesive design is my passion.</p>
                    <br/>
                    <p>Today, a major part of brand identity is respresented in the brand's online presence. A well branded and cohesive website represents the brand's philosophy, vision and aspirations. We understand this, and try to incorporate a website development experience which blends seamlessly with your brand's identity.
                    With our branding experience, we provide you with an intersection of brand visibility and website development. </p>
                    <br/>
                    <p>We focus on the individual business needs and tailor unique content. Our collaborative process is 
                    very hands and we create a website you're absolutely satisfied with.</p>
                </div>  
            </section>
            <Filler />
        </>
    );
}

export default About;
