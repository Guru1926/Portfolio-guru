import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yyx2ajy',
            'template_0uc11vp',
            form.current,
            '3OmxPxmdeapPM0A7E')
        e.target.reset();
    };


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact me</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me</h3>


                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">gurukiran.professional@gmail.com</span>
                            <a href="mailto:gurukiran.professional@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">8547009744</span>
                            <a href="http://wa.me/+918547009744" className="contact__button" target="_blank">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">mr-guru-k</span>
                            <a href="https://www.linkedin.com/in/mr-guru-k/" className="contact__button" target="_blank">Get in Touch<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type='text' name='name' className="contact__form-input" placeholder='Enter your name'></input>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type='email' name='email' className="contact__form-input" placeholder='Enter your email'></input>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className='contact__form-input contact__form-area' placeholder='Write your project'></textarea>
                        </div>
                        <button className="button button--flex">Send<i class="uil uil-comment-upload say_hello"></i></button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact