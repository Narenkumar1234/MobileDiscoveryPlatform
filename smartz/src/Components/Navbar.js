import React from "react";
import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const hamburger = <FontAwesomeIcon icon={faBars} />
const search = <FontAwesomeIcon icon={faSearch} />

export default  function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <>
      <nav className="lg:px-20 bg-white shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           <div className="flex"><Link className="text-2xl lg:text-4xl py-2 px-2 text-green font-semibold transition duration-300" to="/">Smartz</Link></div>
            <button 
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition duration-300"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i>{hamburger}</i>
            </button>
          </div>
          <div className={"lg:flex flex-grow mx-auto" + (navbarOpen ? " flex " : " hidden")} >
           <ul className={"flex flex-col lg:flex-row list-none lg:ml-auto" + (navbarOpen ? " mx-auto " : "")} >
            <li className="nav-item 2">
              <div className="flex">
                <div className="bg-gray-200 shadow flex">
                 <span className="w-auto flex justify-end items-center text-black ">
                  <i className="text-1xl  pl-4">{search}</i></span>
                   <input  className=" w-full bg-gray-200 rounded px-5 py-2 focus:outline-none" type="text"  placeholder="Search Mobiles" onChange={event => (setSearchTerm(event.target.value))} />
                   {/* // eslint-disable-next-line */}
                   <a href={`/getMobilePhone/complete/90000/1000/12/1.0/${searchTerm ? searchTerm: "undefined" }`} >
                   <button className="transition duration-400 text-black hover:text-white font-semibold text-4xs  hover:bg-green rounded text-black p-2 pl-4 pr-4">Search</button>
                 </a>
                </div>
              </div>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </>
    );
}

