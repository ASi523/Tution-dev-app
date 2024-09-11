import React, { useState, useEffect, Fragment } from 'react';
// import './Carousel.css'; // Import your CSS file

const Carousel = () => {
    
    const images = [
        '/img/img1.jpg',
       '/img/img2.jpg',
      '/img/img3.jpg',
    '/img/img4.jpg',
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(interval);
    }, []); // Empty dependency array means it will only run once on mount

    return (
    
            <div className="about-container">
            <section>
    
        <div className="carousel">
            <div className="carousel-inner">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            </div>
            <button className="carousel-control prev" onClick={goToPrev}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={goToNext}>
                &#10095;
            </button>
        </div>
        
      
            </section>
        </div>
        
    );
};

export default Carousel;
