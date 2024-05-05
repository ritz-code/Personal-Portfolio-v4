import React from "react";
import '../../styles/scss/_contactSection.scss';
import { contactIcons } from "../../data/constants";

function ContactSection() {
    return (
        <>
            <section id="contact">
                <div className="contactContainer container">
                    <h1>Say hi!</h1>
                    <div className="pulsatingCircle"></div>

                    <div className="contactDetailsContainer">
                        <h2>Ritu Rawat</h2>
                        <div className="description">
                            <p>Building websites that let your brand shine!!</p>
                        </div>
                        <div className="iconsBox">
                            {contactIcons.map((contactIcon) => {
                                return (
                                    <div className="iconWrapper">
                                        <div className="icon" key={contactIcon.iconName}>
                                            <div className="tooltip">{contactIcon.iconName}</div>
                                            <a className="svgIconsWrapper" href={contactIcon.iconLink} target="_blank" rel="noreferrer" >
                                                <div className="svgIcons">{contactIcon.svg}</div>
                                            </a>
                                        </div>
                                        <div className="details">{contactIcon.details}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactSection;

