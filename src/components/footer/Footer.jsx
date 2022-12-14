import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Gurukiran</h1>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/mr-guru-k/" className="home__social-icon" target="_blank"> <i class="uil uil-linkedin-alt"></i> </a>
                    <a href="https://github.com/Guru1926" className="home__social-icon" target="_blank"> <i className='uil uil-github-alt'></i> </a>
                    <a href="https://www.instagram.com/mr_guru_k_/" className="home__social-icon" target="_blank"> <i className='uil uil-instagram'></i></a>
                </div>

                <span className="footer__copy">
                    &#169; All rights reserved.
                </span>


            </div>
        </footer>
    )
}

export default Footer