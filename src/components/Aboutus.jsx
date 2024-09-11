import React, { useEffect, useState } from 'react';
// import './AboutPage.css';
import Rightmark from '../assets/checkmark.png';

const Aboutus= () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <section style={{marginTop:"8rem"}}>
            <div className={`about-box ${isVisible ? 'slide-up' : ''}`}>
                <div className="row-size">
                    <div className="left-side-image">
                        <img src="https://img.freepik.com/premium-photo/man-with-backpack-book-that-says-word-calculator_1221953-47927.jpg" alt="About Sklassics" />
                    </div>
                    <div className="right-side-content">
                        <div className="content-about">
                            <p>About Sklassics</p>
                            {/* <hr /> */}
                            <h2>India's best online & offline tuition website for quality education!</h2>

                            <p className='sub-line'> We are committed to providing personalised online classes that cater to the unique learning needs of each student.</p>
                            <ul>
                                <li>
                                 <p> <img src={Rightmark} alt="right mark" width="40px" height="40px" />Expert Traines</p>
                                </li>
                                <li>
                                    <p> <img src={Rightmark} alt="right mark" width="40px" height="40px" />Expert Traines</p>
                                </li>
                                <li>
                                    <p> <img src={Rightmark} alt="right mark" width="40px" height="40px" />Expert Traines</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;
