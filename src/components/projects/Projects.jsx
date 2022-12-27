import React from 'react'
import './projects.css'
import urban from '../../assets/urbanHero2.png'
import nykaa from '../../assets/nykaaHero.png'
import blue from '../../assets/blueHero.png'
import horse from '../../assets/hourseHero.png'



const Projects = () => {

    return (
        // <section className="projects section" id='projects'>
        //     <h2 className="section__title">Projects</h2>
        //     <span className="section__subtitle">My project works</span>

        //     <div className="projects__container container grid">
        //         <div className="projects__content">
        //             <div>
        //                 <i className="uil uil projects__icon"></i>
        //                 <h3 className="projects__title"></h3>
        //             </div>

        //             <span className="services__button">View more <i className="uil uil-arrow-right services__button-icon"></i> </span>

        //             <div className="services__modal">
        //                 <div className="services__modal-content"><i className="uil uil-times services__modal-close"></i>
        //                     <h3 className="services__modal-title"></h3>
        //                     <p className="services__modal-description">explain</p>

        //                     <ul className="services__modal-services grid">

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>
        //                     </ul>


        //                 </div>
        //             </div>
        //         </div>

        //         <div className="projects__content">
        //             <div>
        //                 <i className="uil uil projects__icon"></i>
        //                 <h3 className="projects__title"></h3>
        //             </div>

        //             <span className="services__button">View more <i className="uil uil-arrow-right services__button-icon"></i> </span>

        //             <div className="services__modal">
        //                 <div className="services__modal-content"><i className="uil uil-times services__modal-close"></i>
        //                     <h3 className="services__modal-title"></h3>
        //                     <p className="services__modal-description">explain</p>

        //                     <ul className="services__modal-services grid">

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>

        //                         <li className="services__modal-service">
        //                             <i className="uil uil-check-circle services__modal-icon"></i>
        //                             <p className="services__modal-info">I develop user interface</p>
        //                         </li>
        //                     </ul>


        //                 </div>
        //             </div>
        //         </div>


        //     </div>

        // </section>

        <section className="projects section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My project works</span>

            <div className="projects__container container grid">

                {/* ================================================== */}
                <div className="projects__contents">
                    <h3 className="projects__title">The Urban Company</h3>
                    <img src={urban} className="Hero_img" />
                    <br />
                    <br />
                    <p className="projects__info">Clone of an  website, especially to provide home services and sell home appliances.</p>

                    <div className="projects__box">
                        <div className="projects__group">

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Features</h3>
                                    <span className="projects__level">Signup, Login, Sort, Filter & Responsive</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Tech stack</h3>
                                    <span className="projects__level">HTML, CSS, Javascript & Local storage</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Responsibility</h3>
                                    <span className="projects__level">Landing page</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='project__buttons'>
                        <a href="https://github.com/Guru1926/Urban_clone" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href="https://urban-compay-clone.netlify.app/" target="_blank"><i class='bx bx-link'></i></a>
                    </div>

                </div>

                {/* ========================================================== */}
                <div className="projects__contents">
                    <h3 className="projects__title">Nykaa</h3>
                    <img src={nykaa} className="Hero_img" />
                    <br />
                    <br />
                    <p className="projects__info">Clone of an e-commerce website, especially for the beauty products and appliances.</p>
                    <div className="projects__box">
                        <div className="projects__group">
                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Features</h3>
                                    <span className="projects__level">Signup, Login, Sort, Filter & Responsive</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Tech stack</h3>
                                    <span className="projects__level">HTML, CSS, Javascript & mock server</span>
                                </div>
                            </div>


                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Responsibility</h3>
                                    <span className="projects__level">Landing page & Product page</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='project__buttons'>
                        <a href="https://github.com/Guru1926/naykaa-clone" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href="https://nykaa-clone-v2.netlify.app/" target="_blank"><i class='bx bx-link'></i></a>
                    </div>

                </div>
                {/* ========================================================== */}
                <div className="projects__contents">
                    <h3 className="projects__title">Blue Mercury</h3>
                    <img src={blue} className="Hero_img" />
                    <br />
                    <br />
                    <p className="projects__info">Clone of an e-commerce website, especially for the Cosmetics as well as in-store facials and spa treatments</p>
                    <div className="projects__box">
                        <div className="projects__group">
                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Features</h3>
                                    <span className="projects__level">Signup, Login, Sort, Filter,Routing & Responsive</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Tech stack</h3>
                                    <span className="projects__level">React, Redux, Json server & Chakra UI</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Responsibility</h3>
                                    <span className="projects__level">Landing page</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='project__buttons'>
                        <a href="https://github.com/Guru1926/Blue-Mercury-React" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href="https://blue-mercury-clone2.netlify.app/" target="_blank"><i class='bx bx-link'></i></a>
                    </div>

                </div>
                {/* ========================================================== */}
                <div className="projects__contents">
                    <h3 className="projects__title">The Horse </h3>
                    <img src={horse} className="Hero_img" />
                    <br />
                    <br />
                    <p className="projects__info">Clone of an e-commerce website, especially for the beauty products and fashion accessories.</p>
                    <div className="projects__box">
                        <div className="projects__group">
                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Features</h3>
                                    <span className="projects__level">Signup, Login, Sort, Filter & Responsive</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Tech stack</h3>
                                    <span className="projects__level">React, Redux,Local storage, Json server & Chakra UI</span>
                                </div>
                            </div>

                            <div className="projects__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="projects__name">Responsibility</h3>
                                    <span className="projects__level">Login, Signup & Dashboard</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='project__buttons'>
                        <a href="https://github.com/Guru1926/TheHorse.com.au-Clone/tree/main/horse.com" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href="https://thehorse.netlify.app/" target="_blank"><i class='bx bx-link'></i></a>
                    </div>

                </div>
                {/* ========================================================== */}

            </div>
        </section>


    )
}

export default Projects