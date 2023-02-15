import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import imags from "./images";
import images from "./images";

import './slider.css'
function Slider() {

    const [width,setWidth] = useState(0)
const innerslider = useRef()
useEffect(()=>{
    console.log(innerslider.current.scrollWidth)
    console.log(innerslider.current.offsetWidth);
    setWidth(innerslider.current.scrollWidth-innerslider.current.offsetWidth)
},[])

  return (
    <div className="slider-div">
      <motion.div     className="sliders">
    
        <motion.div 
    
       drag="x" dragConstraints={{right:0 ,left:-width}}
       animate={{
        x: [0, -width, -width,0],
      
         }}
         transition={{repeat: Infinity, duration: 40, ease: "linear",  }}
       ref = {innerslider} className="innerslider ">
       

        {images.map((img) => {
            return(
             

         
             <motion.div
            
       
            className="item" key={img}>
                <img src={img} alt=""  />
            </motion.div>
         
            );
          })}
      
        
        </motion.div>  
      </motion.div>
    </div>
  );
}

export default Slider;
