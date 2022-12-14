import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4+ projects and 8+ mini projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experiance</h3>
                <span className="about__subtitle">Reliance Retail as cashier</span>
            </div>

            <div className="about__box">
                <i className="bx bxs-award about__icon"></i>
                <h3 className="about__title">Achievement</h3>
                <span className="about__subtitle">Employee of the month</span>
            </div>



        </div>
    )
}

export default Info;