import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Brand() {

  useEffect(() => {
    // Make the request to the example route
     fetch("/hello")
       .then((response) => {
         // Check if the response was successful
         if (response.ok) {
           // Parse the response data as JSON
           return response.json();
         } else {
           throw new Error("Request failed with status: " + response.status);
         }
       })
       .then((data) => {
         console.log(data);
         // Update the state with the response data
        //  setServerResponse(data);
       })
       .catch((error) => {
         console.log(error);
       });
  }, []);
  console.log("Hel")
  return (
    <>
      <div className="px-12 text-center lg:px-32 py-10 filter drop-shadow-lg">
        <div>
          <h1 className="py-1 lg:px-0 mx-auto text-center lg:text-left font-semibold pb-5">
            Search By Brand
          </h1>
        </div>
        <div className="lg:text-left lg:space-x-14 lg:flex lg:flex-nowrap">
          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/samsung"
            >
              <img
                className=" py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/j6RQ0Kq/samsung.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/vivo"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/LZMLHrP/vivo.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/xiaomi"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/KWjhwf4/xiaomi.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/realme"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/fSBYbGd/RealMe.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/oppo"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/6Y7FBkF/oppo.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/oneplus"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/KFM7KQJ/oneplus.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/F3M6RHK/intex.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>

          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <Link
              className="transform h-64  transition duration-500 hover:scale-125"
              to="/getMobilePhone/poco"
            >
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/xJytR21/poco.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </Link>
          </div>
          <div className="inline-block lg:transform lg:h-30  transition duration-500 lg:hover:scale-125">
            <a href="https://google.com" id="moto">
              <img
                className="  py-1 px-1.5 lg:px-0 inline-block"
                src="https://i.ibb.co/1m8rGqW/moto.png"
                width="85px"
                height="85px"
                alt="xoami"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
