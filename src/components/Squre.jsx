import React from "react";
import './Squrestyle.css'

const Squre=({id,className,state})=>{
   return <div className={`squre-container ${className} ${state==="X"?"X-color":"Y-color"} `} id={id}>{state}</div>;
}

export default Squre;