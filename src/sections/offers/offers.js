import React from "react";
import '../../styles/scss/_offers.scss';
import { offerList } from "../../data/constants";

function Offers() {
    return (
        <>
            <section id="offers">
                <div className='offerContainerWrapper container'>

                    <div className='offerContainer'>
                        <div className='offerContainerLeft'>
                            <img className="specsImg" width="450" height="300" src="/svg/website_work.svg" alt="Website develpment" />
                        </div>
                        <div className='offerContainerRight'>
                            <h2>$0 Down, $150 Per Month,</h2>
                            <h2 className="offerHeadingMarginBottom">12 Month Minimum Contract</h2>
                            <p>$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.</p>
                            <p>You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.</p>

                            <div className="offerLists">
                            { offerList.map((data) => {
                                return (
                                    <div className="card offerCard" key={data.number}>
                                        <h4 className="dataHeading">{data.heading}</h4>
                                        <p>{data.desc}</p>
                                    </div>
                                )
                            })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Offers;