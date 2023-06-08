import Popup from "reactjs-popup";
function Araise(props) {
  return (
    <Popup
      trigger={
        <center>
          <span
            className="lg:w-2/3  w-full text-green border-black fixed font-semibold text-lg 
  box-border lg:border-2 rounded-lg bg-white lg:ml-96 lg:bottom-1 bottom-5 
  lg:animate-bounce cursor-pointer shadow-lg text-left px-10"
          >
            =&gt; compare ({props.list.length})
          </span>
        </center>
      }
      position="right center"
      modal
      className="bg-gray-100"
    >
      <div className="rounded-lg  lg:w-6/12 text-center text-xl mx-auto text-white pt-2 rows-span-1 bg-blue h-10  ">
        <h1>Compare</h1>
      </div>
      <div className="lg:w-6/12 grid grid-cols-2 bg-white shadow-xl border  rounded-lg rows-span-4 text-center mx-auto">
        {console.log(props.list.length)}
        {props.list.length >= 2 ? (
          props.list.map((list) => (
            <div>
              <h1
                id="MName"
                className="lg:px-3 lg:py-3 font-semibold  text-sm text-center lg:p-0 p-1 h-12"
              >
                {list.mobilename}
              </h1>
              <img
                className="lg:inline-block hidden mx-auto "
                src={list.imgsrc}
                width="100"
                height="100"
                alt={list.mobilename}
              />
              <h1
                id="MPrice"
                className="lg:px-5 lg:py-2 font-semibold text-2xl text-green"
              >
                ₹{list.price}
              </h1>
              <h1 className=" font-bold p-3 lg:text-base text-sm  h-40 lg:h-28">
                <img
                  className=" inline"
                  src="https://i.ibb.co/3skXMcx/performance-svg.png  "
                  alt="performance-svg"
                />{" "}
                Performance <hr />{" "}
                <span className="font-normal pt-0">{list.performance}</span>
              </h1>
              <h1 className=" font-bold p-3 lg:text-base text-sm  h-40 lg:h-28">
                <img
                  className=" inline"
                  src="https://i.ibb.co/7Yqqysx/display-svg.png"
                  alt="display-svg"
                />{" "}
                Display <hr />{" "}
                <span className="font-normal pt-0">{list.display}</span>{" "}
              </h1>
              <h1 className=" font-bold p-3 lg:text-base text-sm  h-40 lg:h-28">
                <img
                  className=" inline"
                  src="https://i.ibb.co/yyCK5LH/camera-svg.png"
                  alt="battery-svg"
                />{" "}
                Camera <hr />{" "}
                <span className="font-normal pt-0"> {list.camera} </span>{" "}
              </h1>
              <h1 className=" font-bold p-3 lg:text-base text-sm  h-30 lg:h-28">
                {" "}
                <img
                  className=" inline"
                  src="https://i.ibb.co/64wzrpV/battery-svg.png"
                  alt="battery-svg"
                />{" "}
                Battery <hr />{" "}
                <span className="font-normal pt-0"> {list.battery} </span>{" "}
              </h1>
            </div>
          ))
        ) : (
          <div>Cannot Load Compare!!!</div>
        )}
      </div>
    </Popup>
  );
}

export default Araise;
