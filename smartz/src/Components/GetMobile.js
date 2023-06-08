import React from "react";
import { useEffect, useState } from "react";
import Araise from "./Araise";
var Compare = [];
const makeLink = (name, store) => {
    if (store === "flipkart")
      return "https://www.flipkart.com/search?q=" + name;
    else return "https://www.amazon.com/s?k=" + name;
  //   var mySubString = str.substring(
  //     str.indexOf("=") + 1,
  //     str.indexOf("target=blank")
  //   );
  //   var link = mySubString;
  //   link = link.replaceAll("amp;", "");
  //   return "https://www.91mobiles.com" + link;
};

const GetMobile = (props) => {
  const [mobile, setMobile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [compare, setCompare] = useState(false);
  const [added, setAdded] = useState("nothing");
  var response;
  var Search;
  var name, price, battery, camera, display, a, b, c, d, e;
  const getMobile = async () => {
    try {
      if (typeof props.sort === "undefined") {
        if (
          isNaN(props.name) &&
          typeof props.batt === "undefined" &&
          typeof props.cam == "undefined" &&
          typeof props.cost === "undefined" &&
          typeof props.disp === "undefined" &&
          typeof props.search === "undefined"
        ) {
          response = await fetch("/" + props.name + "/search");
        } else if (isNaN(props.name)) {
          name = isNaN(props.name) ? props.name : "complete";
          price = typeof props.cost === "undefined" ? "90000" : props.cost;
          battery = typeof props.batt === "undefined" ? "1000" : props.batt;
          camera = typeof props.cam === "undefined" ? "12" : props.cam;
          display = typeof props.disp === "undefined" ? "1.0" : props.disp;
          Search =
            typeof props.search === "undefined" ? "search" : props.search;
          setLoading(false);
          response = await fetch(
            "/" +
              name +
              "/" +
              price +
              "/" +
              battery +
              "/" +
              camera +
              "/" +
              display +
              "/" +
              Search
          );
        } else if (!isNaN(props.name)) {
          setLoading(false);
          if (
            typeof props.cam == "undefined" &&
            typeof props.disp === "undefined" &&
            typeof props.batt === "undefined" &&
            typeof props.search === "undefined"
          )
            response = await fetch(
              "/" + props.name + "/" + props.cost + "/search"
            );
          else {
            setLoading(false);
            a = isNaN(props.name) ? props.name : "complete";
            b = typeof props.cost === "undefined" ? "90000" : props.cost;
            c = typeof props.batt === "undefined" ? "1000" : props.batt;
            d = typeof props.cam === "undefined" ? "12" : props.cam;
            e = typeof props.disp === "undefined" ? "1.0" : props.disp;
            Search =
              typeof props.search === "undefined" ? "search" : props.search;
            response = await fetch(
              "/" + a + "/" + b + "/" + c + "/" + d + "/" + e + "/" + Search
            );
          }
        }
      } else {
        if (
          isNaN(props.name) &&
          typeof props.batt === "undefined" &&
          typeof props.cam == "undefined" &&
          typeof props.cost === "undefined" &&
          typeof props.disp === "undefined" &&
          typeof props.search === "undefined"
        ) {
          response = await fetch("/" + props.name + "/search/" + props.sort);
        } else if (isNaN(props.name)) {
          name = isNaN(props.name) ? props.name : "complete";
          price = typeof props.cost === "undefined" ? "90000" : props.cost;
          battery = typeof props.batt === "undefined" ? "1000" : props.batt;
          camera = typeof props.cam === "undefined" ? "12" : props.cam;
          display = typeof props.disp === "undefined" ? "1.0" : props.disp;
          Search =
            typeof props.search === "undefined" ? "search" : props.search;
          setLoading(false);
          response = await fetch(
            "/" +
              name +
              "/" +
              price +
              "/" +
              battery +
              "/" +
              camera +
              "/" +
              display +
              "/" +
              Search +
              "/" +
              props.sort
          );
        } else if (!isNaN(props.name)) {
          setLoading(false);
          if (
            typeof props.cam == "undefined" &&
            typeof props.disp === "undefined" &&
            typeof props.batt === "undefined" &&
            typeof props.search === "undefined"
          )
            response = await fetch(
              "/" + props.name + "/" + props.cost + "/search/" + props.sort
            );
          else {
            setLoading(false);
            a = isNaN(props.name) ? props.name : "complete";
            b = typeof props.cost === "undefined" ? "90000" : props.cost;
            c = typeof props.batt === "undefined" ? "1000" : props.batt;
            d = typeof props.cam === "undefined" ? "12" : props.cam;
            e = typeof props.disp === "undefined" ? "1.0" : props.disp;
            Search =
              typeof props.search === "undefined" ? "search" : props.search;
            response = await fetch(
              "/" +
                a +
                "/" +
                b +
                "/" +
                c +
                "/" +
                d +
                "/" +
                e +
                "/" +
                Search +
                "/" +
                props.sort
            );
          }
        }
      }
      console.log(response);
      const jsonData = await response.json();
      setMobile(jsonData);
      setLoading(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  function AddToCompare(heyMobile) {
    Compare.push(heyMobile);

    setAdded(heyMobile.mobileName);
    console.log(added);
    if (Compare.length === 2) {
      setCompare(true);
    }
    if (Compare.length > 2) {
      setCompare(false);
      Compare = [];
      Compare.push(heyMobile);
    }
    if (Compare.length <= 1) {
      setCompare("null");
    }
  }

  useEffect(() => {
    getMobile();
  }, [
    props.name,
    props.cost,
    props.batt,
    props.cam,
    props.disp,
    props.search,
    props.sort,
  ]);

  return (
    <>
      <br />
      <br />
      {compare === "null" || compare === true ? (
        <center>
          <span
            className="lg:w-2/3 w-full text-white border-black fixed font-semibold text-lg 
  box-border border-2 rounded-lg bg-blue lg:ml-96 lg:bottom-6 bottom-7 mb-5 animate-none 
  cursor-defalut shadow-lg text-left px-10"
          >
            =&gt; Added ({Compare.length})
          </span>
        </center>
      ) : (
        <div></div>
      )}
      {compare ? <Araise list={Compare} /> : <div></div>}
      {loading ? (
        // eslint-disable-next-line
        mobile
          .filter((mobile) => {
            if (
              props.search === null ||
              props.search === "undefined" ||
              typeof props.search === "undefined"
            ) {
              return mobile;
            } else if (
              mobile.mobileName
                .toLowerCase()
                .includes(props.search.toLowerCase())
            ) {
              return mobile;
            }
          })
          .map((mobile) => (
            <div
              key={mobile.id}
              className="lg:px-24 lg:py-7 px-14 pb-10 lg:grid lg:grid-cols-1 md:grid md:grid-cols-2 lg:w-full md:w-screen"
            >
              <div className="rounded-lg border-t-2 border-blue lg:grid lg:grid-rows-6 shadow-md mx-1">
                <div className="row-span-1 lg:grid lg:grid-cols-5">
                  <h1
                    id="MName"
                    className="text-center px-3 lg:py-3 font-semibold lg:col-span-1 py-2 lg:py-0 lg:text-sm"
                  >
                    {mobile.mobileName}
                  </h1>
                  <h1
                    id="MPrice"
                    className="lg:text-right text-center lg:px-5 lg:py-2 font-semibold py-2 lg:py-0 lg:col-span-4 text-3xl text-green"
                  >
                    ₹{mobile.price}
                  </h1>
                </div>

                <div className="row-span-4 grid lg:grid-cols-5 lg:space-x-3 lg:px-2 text-center mx-auto">
                  <a
                    href={`https://www.flipkart.com/search?q=${mobile.mobileName}`}
                  >
                    <img
                      id="MImage"
                      className="text-center mx-auto w-10/12 cursor-pointer"
                      src={mobile.imgsrc}
                      alt="xoami mobile"
                    />
                  </a>
                  <div id="performance">
                    <h1 className="lg:mt-10 font-bold p-3 text-center  lg:h-48 box-border shadow-lg">
                      <img
                        className="inline"
                        src="https://i.ibb.co/3skXMcx/performance-svg.png"
                        alt="performance-svg"
                        border="0"
                      />
                      Performance <hr />
                      <span className="font-normal pt-0">
                        {mobile.performance}
                      </span>
                    </h1>
                  </div>
                  <div id="display">
                    <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                      <img
                        className="inline"
                        src="https://i.ibb.co/7Yqqysx/display-svg.png"
                        alt="display-svg"
                        border="0"
                      />
                      Display <hr />
                      <span className="font-normal pt-0">{mobile.display}</span>
                    </h1>
                  </div>

                  <div id="camera">
                    <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                      <img
                        className="inline"
                        src="https://i.ibb.co/yyCK5LH/camera-svg.png"
                        alt="battery-svg"
                        border="0"
                      />
                      Camera <hr />
                      <span className="font-normal pt-0">{mobile.camera}</span>
                    </h1>
                    <br />
                  </div>

                  <div id="battery">
                    <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                      <img
                        className="inline"
                        src="https://i.ibb.co/64wzrpV/battery-svg.png"
                        alt="battery-svg"
                        border="0"
                      />
                      Battery <hr />
                      <span className="font-normal pt-0">
                        {mobile.battery}{" "}
                      </span>
                    </h1>
                    <br />
                  </div>
                </div>

                <div className="lg:row-span-1 lg:grid lg:grid-cols-5 text-center">
                  <button
                    className={
                      "lg:m-2 text-center text-green px-3 py-3 font-semibold lg:col-span-1 text-lg lg:grid-rows-5" +
                      (added == mobile.mobileName ? " text-vivo" : " ")
                    }
                    onClick={() => AddToCompare(mobile)}
                  >
                    + Add to compare
                  </button>
                  <div className="lg:col-span-4 text-center lg:text-right ">
                    <h1 className="lg:hidden inline-block font-semibold text-right">
                      Buy on
                    </h1>
                    <a
                      href={makeLink(
                        mobile.mobileName,
                        "flipkart"
                      )}
                    >
                      <img
                        className="w-14 lg:hidden inline-block"
                        src="https://i.ibb.co/BB9ymDL/flipkart.jpg"
                        alt="flipkart"
                      />
                      <h1 className="hidden lg:inline-block lg:px-5 lg:py-2 font-bold inline-block text-xl">
                        <img
                          className="w-14 inline-block"
                          src="https://i.ibb.co/BB9ymDL/flipkart.jpg"
                          alt="flipkart"
                        />
                        flipkart
                      </h1>
                    </a>
                    <a
                      href={makeLink(
                        mobile.mobileName,
                        "amazon"
                      )}
                    >
                      <img
                        className="w-10 lg:hidden mt-2 inline-block"
                        src="https://i.ibb.co/VjKn8y7/amazon.png"
                        alt="amazon"
                      />
                      <h1 className="hidden lg:inline-block lg:px-5 lg:py-2 font-bold inline-block text-xl">
                        <img
                          className="w-10 inline-block"
                          src="https://i.ibb.co/VjKn8y7/amazon.png"
                          alt="amazon"
                        />
                        amazon
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="lg:px-24 lg:py-7 px-14 py-7 lg:grid lg:grid-cols-1 animate-pulse">
          <div className="rounded-lg border-t-2 border-blue lg:grid grid-rows-6 shadow-md mx-1 md:col-span-1">
            <div className="row-span-1 lg:grid lg:grid-cols-5">
              <button className="btn btn-lg btn-ghost text-green lg:text-right loading">
                loading..
              </button>
            </div>
            <div className="row-span-4 grid lg:grid-cols-5 lg:space-x-3 lg:px-2 text-center mx-auto">
              <img
                id="MImage"
                className="text-center px-3 lg:py-3 font-semibold lg:col-span-1 py-2 lg:py-0 w-4/12 lg:w-full lg:text-sm"
                src="https://wallpaperaccess.com/full/1668898.jpg"
                alt="xoami mobile"
              />

              <div id="performance">
                <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                  <img
                    className="inline"
                    src="https://i.ibb.co/3skXMcx/performance-svg.png  "
                    alt="performance-svg"
                    border="0"
                  />
                  Performance <hr /> <span className="font-normal pt-0"></span>
                </h1>
              </div>

              <div id="display">
                <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                  <img
                    className="inline"
                    src="https://i.ibb.co/7Yqqysx/display-svg.png"
                    alt="display-svg"
                    border="0"
                  />
                  Display <hr /> <span className="font-normal pt-0"></span>
                </h1>
              </div>

              <div id="camera">
                <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                  <img
                    className="inline"
                    src="https://i.ibb.co/yyCK5LH/camera-svg.png"
                    alt="battery-svg"
                    border="0"
                  />
                  Camera <hr /> <span className="font-normal pt-0"></span>
                </h1>
                <br />
              </div>

              <div id="battery">
                <h1 className="lg:mt-10 font-bold p-3 text-center border-3 lg:h-48 box-border shadow-lg">
                  <img
                    className="inline"
                    src="https://i.ibb.co/64wzrpV/battery-svg.png"
                    alt="battery-svg"
                    border="0"
                  />
                  Battery <hr /> <span className="font-normal pt-0"></span>
                </h1>
                <br />
              </div>
            </div>

            <div className="lg:row-span-1 lg:grid lg:grid-cols-5 text-center ">
              <button
                className={
                  "lg:m-2 text-center text-green px-3 py-3 font-semibold lg:col-span-1 text-lg lg:grid-rows-5" +
                  (added == mobile.mobileName ? " text-vivo" : " ")
                }
                onClick={() => AddToCompare(mobile)}
              >
                + Add to compare
              </button>
              <div className="lg:col-span-4 text-center lg:text-right">
                <a href="www.google.com">
                  <img
                    className="w-14 lg:hidden inline-block"
                    src="https://i.ibb.co/BB9ymDL/flipkart.jpg"
                    alt="flipkart"
                  />
                  <h1 className="hidden lg:inline-block lg:px-5 lg:py-2 font-bold inline-block text-xl">
                    <img
                      className="w-14 inline-block"
                      src="https://i.ibb.co/BB9ymDL/flipkart.jpg"
                      alt="flipkart"
                    />
                    flipkart
                  </h1>
                </a>
                <a href="www.google.com">
                  <img
                    className="w-10 lg:hidden mt-2 inline-block"
                    src="https://i.ibb.co/VjKn8y7/amazon.png"
                    alt="amazon"
                  />
                  <h1 className="hidden lg:inline-block lg:px-5 lg:py-2 font-bold inline-block text-xl">
                    <img
                      className="w-10 inline-block"
                      src="https://i.ibb.co/VjKn8y7/amazon.png"
                      alt="amazon"
                    />
                    amazon
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default GetMobile;
