import React from "react";
import IMG from '../../images/img2.jpg';
import './about.css';

const About = () => {
    return (
        <>
            <section className="about section div" id='about'>
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle">My introduction</span>

                <div className="about_container container grid">
                    <img src={IMG} alt="about-img" className="about_img" />

                    <div className="about_data">
                        <p className="about_description">Front-end developer, with extensive knowledge
                            and years of experience, working in web technologies and expertise in HTML,
                            CSS, and JavaScript, also delivering quality work and pixel-perfect websites
                            that engage and delight users. 
                        </p>

                        <div className="about_buttons">
                            <a href="Odera-OD-tech-Resume.pdf" download="Odera-OD-tech-Resume.pdf" className="button button-flex">
                                Download CV 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About