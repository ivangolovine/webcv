import React from "react";
import { useState, useEffect } from 'react';

function NavU(){
    const [NavUp, SetBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                SetBackToTopButton(true)
            }
            else {
                SetBackToTopButton(false)
            }
        })
    },[])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <div>
            {
                NavUp && ( 
                <button id="topBtn" 
                onClick={ scrollUp }><img src="images/arrow-up-solid.svg"/></button>       
                )
            }
        </div>
    );
}

export default NavU;
