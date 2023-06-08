import React, { useEffect, useState } from "react";

const Portfolio_Slider = ({ slides }) => {
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

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    }

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
        <div className="carousel-container-portfolio"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
            <div className="carousel-container-slides">
            <div className="carousel-button-background carousel-left">
                <button className="carousel-arrow carousel-left" onClick={prevSlide}><img src="images/angle-left-solid.svg"/></button>
            </div>
            <div className="carousel-button-background carousel-right">
                <button className="carousel-arrow carousel-right" onClick={nextSlide}><img src="images/angle-right-solid.svg"/></button>
            </div>
            { slides.map((item, index) => {
                return (  
                    <div className = {index === currentIndex ? "carousel-container-slides-inner" : "carousel-container-slides-inner slide-hidden"} key = {index}>
                        {index === currentIndex && (
                        <>
                        <img src = {item.icon} alt = "nice"></img>
                        <div className="carousel-description">
                            <div className="carousel-title">{item.name}</div>
                            <div className="carousel-details">{item.description}</div>
                            <div className="carousel-link"><a href={item.http} target="_blank"><img className="carousel-link-btn" src="images/githubimage.png"/></a></div>
                        </div>
                        </>
                        )}
                    </div>
                       
                )})
            }
            <span className="indicators">
                { slides.map((_, index) => {
                    return <button key={index} onClick={() => setCurrentIndex(index)} className={ index === currentIndex ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
            </div> 
        </div>
    )
}



/*
const Portfolio_Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === slides.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }
   
    useEffect(()=> {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)})

    return (
        <div className="carousel-container">
            { slides.map((item, index) => {
                return <div className = "carousel-inner" style={{transform: `translate(-${currentIndex * 100}%)`}} key = {index}>
                        <img src = {item.icon} alt = "nice"></img>
                        </div>
            })
            }
        </div>
    )
}
*/

export default Portfolio_Slider;