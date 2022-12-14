import React from 'react';
import "./about.css";
import imag from '../../assets/profile.jpg'
import CV from '../../assets/guru_kiran_resume.pdf'
import Info from './info';


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={imag} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">Aspiring full stack web developer,  having a sound understanding of HTML, CSS, Javascript, React Js, Node Js, Express, MongoDB and
                        Java Programming language. Responsible, organized and ambitious with quick learning abilities.
                    </p>
                    <a download='' href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About