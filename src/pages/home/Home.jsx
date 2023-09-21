import React, { useEffect, useState } from "react";
import {FaXTwitter} from 'react-icons/fa6';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './home.css';

const Home = () => {
    const [changeElement, setChangeElement] = useState(true);
    const [showHide, setShowHide] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        let sections = document.querySelectorAll('.section');
        let navLinks = document.querySelectorAll('header nav a');
        let div = document.querySelectorAll('.div');
        let nav = document.querySelectorAll('header ul li a');

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                })
            }
        })

        div.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                nav.forEach(links => {
                    links.classList.remove('activa');
                    document.querySelector('header ul li a[href*=' + id + ']').classList.add('activa');
                })
            }
        })
    }

    const handleToggleBtn = () => {
        setChangeElement(false);
        setShowHide(true)
    }

    const handleToggleIcon = () => {
        setChangeElement(true);
        setShowHide(false);
    }

    return (
        <>
            <header className="header">
                <a href='#' className="logo">Portfo<span>lio</span></a>

                {changeElement ? (
                    <div id="menu-btn" onClick={handleToggleBtn}>
                        <div className="menu-btn_burger"></div>
                        <div className="menu-btn_burger"></div>
                        <div className="menu-btn_burger"></div>
                    </div>
                ) : (
                    <div className="menu-icon" onClick={handleToggleIcon}>
                        <div className="menu-icon_burger1 menu-icon_burger"></div>
                        <div className="menu-icon_burger2 menu-icon_burger"></div>
                    </div>
                )}

                <nav className='navbar' id={showHide ? 'show' : 'hide'}>
                    <a href='#home' className="active">Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#portfolio'>Portfolio</a>
                    <a href='#contact'>Contact</a>
                </nav>

                <ul className='nav'>
                    <li><a href='#home' className="activa">Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </header>


            <section className="home wrapper section div" id='home'>
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Odera <span>Nnaneme</span></h1>
                    <h3>And I'am a <span>Frontend</span> Developer</h3>
                    <p>A fervent front-end developer with a passion for creating<br />
                        visually stunning and user-centric web experiences. I specialize<br />
                        in turning design mockups into pixel-perfect, responsive<br />
                        web pages using modern HTML, CSS, and JavaScript frameworks.</p>
                    <div className="social-media">
                        <a href="https://github.com/OD-tech-web" target="_blank"><AiFillGithub/></a>
                        <a href="https://twitter.com/OderaNnaneme?t=U-9j543zrMeNPscyCcsYew&s=09" target="_blank"><FaXTwitter/></a> 
                        <a href="https://www.linkedin.com/in/odera-nnaneme-4a4583249" target="_blank"><AiFillLinkedin/></a>
                    </div>
                    <a href="Odera-OD-tech-Resume.pdf" className="button" download="Odera-OD-tech-Resume.pdf">Download CV</a>
                </div>

                <div className="home-img">
                    <div className="body">
                        <h1>OD-tech</h1>
                    </div>
                </div>

            </section>

            <section className="fixed-iconTop">
                <a href="#home"><AiOutlineArrowUp/></a>
            </section>
        </>
    )
}

export default Home