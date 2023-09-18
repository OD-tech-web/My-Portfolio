import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <>
            <section className="skills section div" id='skills'>
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">My technical level</span>

                <div className="skills_container container grid">
                    <div>
                        <div className="skills_content">
                            <div className="skills_list grid">
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">HTML</h3>
                                        <span className="skills_number">90%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_html"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">CSS</h3>
                                        <span className="skills_number">87%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_css"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Sass</h3>
                                        <span className="skills_number">89%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_sass"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">JavaScript</h3>
                                        <span className="skills_number">68%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_js"></span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">React</h3>
                                        <span className="skills_number">80%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_react"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Skills