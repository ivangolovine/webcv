import React, {useState} from "react";


function CarouselV1() {
    return (
       <div>
           <div className="carousel-container">
                <div className="carousel-header">
                    <div  className="company-name">
                        <span>Fuzzex</span>
                    </div>
                    <div className="company-role">
                        <span >C++ Developer</span>
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
                    I got to experience what its like to work in a start-up environment, with an agile scrum approach to testing. It also taught me the importance of utilizing various tools and using  certain design patterns when it makes sense. 
                    </p>
                </div>
            </div>
       </div>
    );
}

export default CarouselV1;