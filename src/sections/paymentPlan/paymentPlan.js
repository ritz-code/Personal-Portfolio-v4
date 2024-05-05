import React, { useContext } from 'react';
import '../../styles/scss/_paymentPlan.scss'
import { paymentPlanList } from "../../data/constants";

function PaymentPlan() {
    return (
        <>
            <section id="paymentPlan">
                <div className="paymentContainerWrapper">
                    <h2>Choose The Perfect Plan for you</h2>
                    <div className="paymentContainer">
                        {
                            paymentPlanList.map((data) => {
                                return (
                                    <div className="planCard" key={data.number}>
                                        <div className="headingAndPrice">
                                            <div className="heading">
                                                <h3>{data.heading}</h3>
                                                <p>{data.subHeading}</p>
                                            </div>
                                            <div class="priceBox">
                                                <h3 className='price'>{data.price}</h3>
                                            </div>
                                        </div>
                                        <div className="endContainer">
                                            <ul>
                                                <li>{data.feature1}</li>
                                                <li>{data.feature2}</li>
                                                <li>{data.feature3}</li>
                                                <li>{data.feature4}</li>
                                            </ul>
                                            <div className='btnContainer'>
                                                <button className="button planBtn">Contact Us</button>
                                            </div>
                                        </div>	
                                    </div>
                                )
                            })
                        }
                    </div>  
                </div>
            </section>
        </>
    );
};

export default PaymentPlan;
