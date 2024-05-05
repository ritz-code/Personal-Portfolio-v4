import React from "react";
import Projects from "./projects";
import OtherProjects from "./otherprojects";

function Portfolio() {
    return (
        <>
            <section id="projects">
                <div className='container'>
                    <Projects />

                    <OtherProjects />
                </div>
            </section>
        </>
    );
}


export default Portfolio;