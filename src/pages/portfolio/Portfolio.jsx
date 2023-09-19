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
                            <p className="portfolio_description">A School Website designed using HTML, CSS and React.</p>
                            <a href="https://github.com/OD-tech-web/School-Site" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img2"></div>
                        
                        <div>
                            <h3 className="portfolio_title">MusicFestival Site</h3>
                            <p className="portfolio_description">A MusicFestival Website designed using HTML, Sass and JavaScript.</p>
                            <a href="https://github.com/OD-tech-web/Music-Festival-Site" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img3"></div>

                        <div>
                            <h3 className="portfolio_title">Calculator</h3>
                            <p className="portfolio_description">A Calculator designed using HTML, CSS and JavaScript.</p>
                            <a href="https://github.com/OD-tech-web/Calculator" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img4"></div>

                        <div>
                            <h3 className="portfolio_title">Construction Website</h3>
                            <p className="portfolio_description">A Construction Website designed using HTML, Sass and JavaScript.</p>
                            <a href="https://github.com/OD-tech-web/Construction-Site" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img5"></div>

                        <div>
                            <h3 className="portfolio_title">Periodic Table</h3>
                            <p className="portfolio_description">A design of the periodic table using HTML and CSS.</p>
                            <a href="https://github.com/OD-tech-web/Periodic-Table-Design" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="portfolio_content">
                        <div className="portfolio_img project_img6"></div>

                        <div>
                            <h3 className="portfolio_title">Hotel Website</h3>
                            <p className="portfolio_description">A Hotel Website designed using HTML, Sass and JavaScript.</p>
                            <a href="https://github.com/OD-tech-web/Hotel-Site" className="button-flex button portfolio_button">
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio