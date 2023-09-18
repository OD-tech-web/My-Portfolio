import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <>
            <section className="contact section div" id='contact'>
                <h2 className="section_title">Contact Me</h2>
                <span className="section_subtitle">Get in touch</span>

                <div className="contact_container container grid">
                    <div>
                        <div className="contact_information">
                            <i className="uil uil-phone contact_icon"></i>

                            <div>
                                <h3 className="contact_title">Call Me</h3>
                                <span className="contact_subtitle">+(234)806-813-9694</span>
                            </div>
                        </div>

                        <div className="contact_information">
                            <i className="uil uil-envelope contact_icon"></i>

                            <div>
                                <h3 className="contact_title">Email</h3>
                                <span className="contact_subtitle">oderannaneme@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact_information">
                            <i className="uil uil-map-marker contact_icon"></i>

                            <div>
                                <h3 className="contact_title">Location</h3>
                                <span className="contact_subtitle">Nigeria</span>
                            </div>
                        </div>
                    </div>

                    <form action="" className="contact_form grid">
                        <div className="contact_inputs grid">
                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Name</label>
                                <input type="text" className="contact_input" />
                            </div>
                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Email</label>
                                <input type="email" className="contact_input" />
                            </div>
                        </div>
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Project</label>
                            <input type="text" className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Message</label>
                            <textarea name="" id="" cols='0' rows='7' className="contact_input" />
                        </div>

                        <div>
                            <a href="#" className="button button-flex">
                                Send Message
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact