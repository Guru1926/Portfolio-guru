import React from 'react'
import './skills.css'

const Backend = () => {
    return (
        <div className="skills__contents">
            <h3 className="skills__title">Backend Development</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Express</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Backend