import React from "react";
import {Link} from "react-router-dom"
function Usage(){
 return (
     <>
<br/>
<div className="grid grid-cols-2 lg:text-left text-center lg:mt-4">
     <div className="lg:cols-span-1 lg:space-x-10 text-center ">
        <Link to="/getMobilePhone/complete/90000/5000/12/1.0/undefined/ASC" id="Battery">
        <img className="py-1 px-1.5 lg:w-4/12  inline-block" src="https://i.ibb.co/PT7CqD4/Battery.png"  alt="Battery"/>
        </Link>

        <Link to="/getMobilePhone/complete/90000/1000/48/1.0/undefined/ASC" id="Camera">
            <img className="py-1 px-1.5 lg:w-4/12 inline-block" src="https://i.ibb.co/84GShvX/Camera.png"  alt="Camera"/>
        </Link>
    </div>
    <div className="lg:cols-span-1 lg:space-x-10 ">
        <Link to="/getMobilePhone/complete/20000/1000/12/1.0/undefined/ASC" id="Budget">
            <img className="py-1 px-1.5 lg:w-4/12 inline-block" src="https://i.ibb.co/QKBvkBN/Budget.png" alt="Budget"/>
        </Link>
        <Link to="/getMobilePhone/complete/90000/5000/48/5.0/undefined/ASC" id="all">
            <img className="py-1 px-1.5 lg:w-4/12  inline-block" src="https://i.ibb.co/5BT4xFN/All.png"  alt="All"/>
        </Link> 
    </div>   
</div>
    </>
 )
}
export default  Usage