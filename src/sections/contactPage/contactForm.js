import React from "react";
import '../../styles/scss/_contactForm.scss';

import emailjs from 'emailjs-com';

const SERVICE_ID = "service_ek5blss";
const TEMPLATE_ID = "template_4884qhd";
const PUBLIC_KEY = "geY8ZQ1P5hTXn_hYk";

function ContactForm() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.clear();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
    };

    return (
        <>
            <section id="contactContainer">
                <div className="contactWrapper">
                    <div className="formWrapper">
                        <form id="contact" method="post" name="form" onSubmit={handleOnSubmit}><input type="hidden" name="form-name" value="form" />
                            <h3 class="contactFieldsWrapper"><span>DROP</span> US A LINE</h3>
                            
                            <input aria-label="name" className="contactName" name="name" placeholder="Name" type="text" tabindex="1" required="" />
                            <input aria-label="name" name="business" placeholder="Business" type="text" tabindex="2" required="" />
                            <input aria-label="email" name="email" placeholder="Email Address" type="email" tabindex="3" required="" />
                            <input aria-label="phone number" name="phone" placeholder="Phone Number" type="tel" tabindex="4" required="" />
                            <textarea aria-label="write your message" name="message" placeholder="Type your Message Here.." tabindex="5" required=""></textarea>
                            
                            <p class="formSubmit">
                                <button name="submit" type="submit" id="contactSubmit" className="button submitBtn" data-submit="...Sending">Submit</button>
                            </p>
                        </form>
                    </div>
                    <div className="contactImageWrapper">
                        <img className="contactImage" width="450" height="300" src="/svg/monitor.svg" alt="Website development image" />
                        <div class="borderGroup">
                            <h3>Email:</h3>
                            <p>info.riturawat.dev@gmail.com</p>
                        </div>
                        <div class="borderGroup">
                            <h3>Phone:</h3>
                            <p>(470) 588 2570</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm;


