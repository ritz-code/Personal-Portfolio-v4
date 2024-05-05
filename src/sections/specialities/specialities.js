import React from "react";
import '../../styles/scss/_specialities.scss'
import { specialitiesData } from "../../data/constants";

function Specialities() {
    return (
        <>
            <div className="specialitiesContainerWrapper">
                <div className="specialitiesContainer">
                    <h2>What we do</h2>
                    <hr />
                    <p>We specialize in website design and development for 
                    clients anywhere in the US.<br/> We understand that a website is not just a will-o'-the-wisp in the internet's web, but rather the digital manifestation of your brand. 
                    It tells your story, your vision, and your hopes for the future. 
                   <br /> <br />Whether you are starting your website journey or want to update your website to keep it fresh, we are here to help. We work with clients to establish and enrich their brand and provide a cohesive image through a brand-enhancing website.</p>
                    <div className="specContainer">
                    { specialitiesData.map((specs) => {
                        return (
                            <div className="card specCard" key={specs.number}>
                                <div className="circle">
                                    <img className="specsImg" src={specs.img} alt={specs.imgAlt} />
                                </div>
                                <h4>{specs.heading}</h4>
                                <hr />
                                <p>{specs.desc}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specialities;
 