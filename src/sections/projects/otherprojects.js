import React from "react";

import { otherProjects } from '../../data/constants';
import '../../styles/scss/_otherprojects.scss';

function OtherProjects() {
    return (
        <>

            <div className='otherprojectsContainer container'>
                <h2>Notable Mentions</h2>
                <div className="projectsWrapper">
                    {otherProjects.map((project) => {
                        return (
                                <div className="projectCard" key={project.name}>
                                    <div className="cardImg">
                                        <img src={project.img} alt={project.imgAlt} className=" cardSize"></img>
                                    </div>
                                    <div className="cardDetails">

                                        <h5>{project.name}</h5>
                                        <p className="cardText">{project.description}  </p>
                                        
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export default OtherProjects;