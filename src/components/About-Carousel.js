import React, { useEffect, useState } from "react";

const About_Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [touchPosition, setTouchPosition] = useState(null);
    const length = slides.length;

    /*Handles swiping*/
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            nextSlide()
        }
    
        if (diff < -5) {
            prevSlide()
        }
    
        setTouchPosition(null)
    }

    /*Handles button presses*/
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    }

    /*Handles auto switching slides*/
    useEffect (() => {
        const interval = setInterval(() => {
            if (!paused) {
                nextSlide(currentIndex + 1);
            }
        }, 10000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="about-carousel-container-outside">
            <h2 className="experience-title">Experience</h2>
            <div className="about-carousel-button-background about-carousel-left">
                <button className="about-carousel-arrow about-carousel-left" onClick={prevSlide}><img src="images/angle-left-solid.svg"/></button>
            </div>
            <div className="about-carousel-button-background about-carousel-right">
                <button className="about-carousel-arrow about-carousel-right" onClick={nextSlide}><img src="images/angle-right-solid.svg"/></button>
            </div>
            <div className="about-carousel-container">
                <div className="about-carousel-container-slides"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}>
                    { slides.map((item, index) => {
                        return (  
                            <div className = {index === currentIndex ? "carousel-container-slides-inner" : "carousel-container-slides-inner slide-hidden"} key = {index}>
                                {index === currentIndex && (
                                <>
                                <div className="about-carousel-header">
                                    <div className="about-company-name">
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="about-company-role">
                                        <span>{item.role}</span>
                                    </div>
                                    <div className="about-company-date">
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="about-company-location">
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                                <div className="about-company-desc-container">
                                    { item.description.map(data => {
                                    return(<p key={index} className="about-company-desc">
                                        {data.details}
                                        </p>
                                        )})
                                    }   
                                </div>
                                </>
                                )}
                            </div>
                        )})
                    }
                </div>
                <span className="about-indicators">
                { slides.map((_, index) => {
                    return <button key={index} onClick={() => setCurrentIndex(index)} className={ index === currentIndex ? "about-indicator" : "about-indicator about-indicator-inactive"}></button>
                })}
                </span>
            </div>
        </div>
    )
}

function CarouselV1() {
    return (
       <div>
           <div className="carousel-container">
                <div className="carousel-header">
                    <div className="company-name">
                        <span>Fuzzex</span>
                    </div>
                    <div className="company-role">
                        <span>C++ Developer</span>
                    </div>
                    <div className="company-date">
                        <span>Mar 2019 - Dec 2019</span>
                    </div>
                    <div className="company-location">
                        <span>Toronto, Ontario, Canada</span>
                    </div>
                </div>
                <div>
                    <p className="company-Desc">
                        At Fuzzex, I was part of a small development team working on multiple mobile applications. Fuzzex was one of the first companies to bring Preferans and Tangram to the mobile market.
                    </p>
                    <p className="company-Desc">
                        I got to experience what it's like to work in a start-up environment, with an agile scrum approach to testing. It also taught me the importance of utilizing various tools and using certain design patterns when it makes sense. 
                    </p>
                </div>
            </div>
       </div>
    );
}

export default About_Slider;