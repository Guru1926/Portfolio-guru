import React from 'react'

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#footer" className="home__scroll-button button--flex--scroll">
                <span className="home__scroll-name">Scroll Down </span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
            </a>

        </div>
    )
}

export default ScrollDown