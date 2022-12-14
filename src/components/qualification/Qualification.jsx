import React from 'react'
import './qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active  button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>


                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">



                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development</h3>
                                <span className="qualification__subtitle">Masai School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022-present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>



                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">B.E in Mechanical</h3>
                                <span className="qualification__subtitle">Sahyadri College of Engineering and Management </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2018-2022
                                </div>
                            </div>



                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Pre University</h3>
                                <span className="qualification__subtitle">Canara Pre-University college</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2016-2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Gajanana English Medium High School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2013-2016
                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Qualification