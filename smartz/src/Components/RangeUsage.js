import React from "react";
import "../index.css";
import Usage from "./Usage";
import Range from "./Range";


function RangeUsage(){
    return (<>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 md:px-4 lg:px-32 py-5 filter drop-shadow-lg">
    <div>
    <h1 className="py-1 px-1.5 text-center md:px-0  lg:px-0  lg:text-left font-semibold pb-5">Search By Price</h1>
    <div className=" inline-block">
    <Range />
    </div>
    </div> 
    <div>
    <h1 className="py-1 px-1.5  text-center md:px-0 lg:px-0 lg:text-left font-semibold pb-5">Search By Usage</h1>
    <Usage />
    </div> 
    </div>
    </>)
}

export default RangeUsage;

