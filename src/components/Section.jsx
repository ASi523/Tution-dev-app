// App.js
import React from 'react';
// import './App.css';
import School from '../assets/school.jpg'

const Section = () => {
    return (
        <div className="container">
            {/* Section 1: Content left, Image right */}
            <h1 style={{ textAlign: 'center' }}>Tuition for All Levels</h1>
            <div className="section">
                <div className="content-left">
                    <h2>Elementary Level (Grades 1-5)</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2020/12/18/00/43/business-5840870_640.png" alt="Placeholder" />
                </div>
            </div>

            {/* Section 2: Image left, Content right */}
            <div className="section reverse">
                <div className="image">
                    <img src={School} alt="Placeholder" width="400px" />
                </div>
                <div className="content-right">
                    <h2>Middle School (Grades 6-8)</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="section">
                <div className="content-left">
                    <h2>High School (Grades 9-12)</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Placeholder" />
                </div>
            </div>
        </div>
    );
};

export default Section;
