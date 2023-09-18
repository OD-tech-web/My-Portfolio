import React from "react";
import './portfolio.css';

const Portfolio = () => {
    return (
        <>
            <section className="portfolio section div" id='portfolio'>
                <h2 className="section_title">Portfolio</h2>
                <span className="section_subtitle">Latest Projects</span>

                <div className="portfolio_container">
                    <div className="portfolio_content">
                        <div className="portfolio_img"></div>

                        <div>
                            <h3 className="portfolio_title">School Website</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img2"></div>
                        
                        <div>
                            <h3 className="portfolio_title">MusicFestival Site</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img3"></div>

                        <div>
                            <h3 className="portfolio_title">Calculator</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img4"></div>

                        <div>
                            <h3 className="portfolio_title">Construction Website</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img5"></div>

                        <div>
                            <h3 className="portfolio_title">Periodic Table</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img6"></div>

                        <div>
                            <h3 className="portfolio_title">Hotel Website</h3>
                            <p className="portfolio_description">Website adaptable
                                to all devices with animated interactions.</p>
                            <a href="#" className="button-flex button portfolio_button">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio