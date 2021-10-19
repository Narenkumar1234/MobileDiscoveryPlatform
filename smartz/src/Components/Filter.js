import React, { useState ,useEffect} from "react";
import GetMobile from "./GetMobile"
import { useParams } from "react-router";
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const filterIcon =<FontAwesomeIcon  icon ={faFilter}/>
const close = <FontAwesomeIcon icon={faTimesCircle}/>

function Filter () {
  const  mobile  = useParams();
  // render component Getmobile
  const [Mobile,SetMobile] = useState(mobile.id);
  const [Price,SetPrice] = useState(mobile.price);
  const [Battery,SetBattery] = useState(mobile.batt);
  const [Camera,SetCamera] = useState(mobile.cam);
  const [Display,SetDisplay] = useState(mobile.disp);
  const [Sort,SetSort] = useState(mobile.sorting);
  
  const [Open,SetOpen] = useState(false);
  const [FilterOpen, SetFilterOpen] = useState(false);

  const Search = mobile.search;

  // filter button update
  const [Vivo,AddVivo] = useState(false);
  const [Oppo,AddOppo] = useState(false);
  const [Samsung,AddSamsung] = useState(false);
  const [Xiaomi,AddXiaomi] = useState(false);
  const [Oneplus,AddOneplus] = useState(false);
  const [Poco,AddPoco] = useState(false);
  const [Realme,AddRealme] = useState(false);

  const [Below13,SetBelow13] = useState(false);
  const [Below17,SetBelow17] = useState(false);
  const [Below20,SetBelow20] = useState(false);
  
  const [Above2000,SetAbove2000] = useState(false);
  const [Above3500,SetAbove3500] = useState(false);
  const [Above5000,SetAbove5000] = useState(false);

  const [Above12MP,SetAbove12MP] = useState(false);
  const [Above24MP,SetAbove24MP] = useState(false);
  const [Above48MP,SetAbove48MP] = useState(false);

  const [Inch52,SetInch52] = useState(false);
  const [Inch55,SetInch55] = useState(false);
  const [Inch6,SetInch6] = useState(false);

  const [Asc,SetAsc] = useState(false);
  const [Dsc,SetDsc] = useState(false);
  
  const [Loading,SetLoading] = useState(false);
  const [LoadingBrand,SetLoadingBrand] = useState(false);
  const [LoadingBattery,SetLoadingBattery] =useState(false);
  const [LoadingCamera,SetLoadingCamera] =useState(false);
  const [LoadingDisplay,SetLoadingDisplay] =useState(false);
  const [LoadingSort,SetLoadingSort] = useState(false);
  
  useEffect(()=>{
      <GetMobile name={Mobile} cost={Price} batt={Battery} cam={Camera} disp={Display} search={Search} sort={Sort}/>
  },[Mobile,Price,Battery,Camera,Display,Search,Sort])
 
  //responsive open filter
  function openFilter(){
    SetFilterOpen(!FilterOpen)
    SetOpen(!Open);
  }


  //Sort
  function clickSort(order){
    SetSort(order);
    if(order==="ASC"){
      SetAsc(true);
      SetLoadingSort(true);
      setTimeout(() => {
        SetLoadingSort(false);
      }, 3000)
    }
    else{
      SetAsc(false);  
    }
    if(order==="DESC"){
      SetDsc(true);
      SetLoadingSort(true);
      setTimeout(() => {
        SetLoadingSort(false);
      }, 3000)
    }
    else{
      SetDsc(false);
    }
  }
  
  //Display 
  function clickDisplay(disp){
    SetDisplay(disp);
    if(disp===5.2){
      SetInch52(true);
      SetLoadingDisplay(true);
      setTimeout(() => {
        SetLoadingDisplay(false);
      }, 3000)
    }
    else{
      SetInch52(false);  
    }
    if(disp===5.5){
      SetInch55(true);
      SetLoadingDisplay(true);
      setTimeout(() => {
        SetLoadingDisplay(false);
      }, 3000)
    }
    else{
      SetInch55(false);
    }
    if(disp===5.9){
      SetInch6(true);
      SetLoadingDisplay(true);
      setTimeout(() => {
        SetLoadingDisplay(false);
      }, 3000)
    }
    else{
      SetInch6(false)
      
    }
  }
  
  
//camera
function clickCamera(cam){
  SetCamera(cam);
  if(cam===12){
    SetAbove12MP(true);
    SetLoadingCamera(true);
    setTimeout(() => {
      SetLoadingCamera(false);
    }, 3000)
  }
  else{
    SetAbove12MP(false);
    
  }
  if(cam===24){
    SetAbove24MP(true);
    SetLoadingCamera(true);
    setTimeout(() => {
      SetLoadingCamera(false);
    }, 3000)
  }
  else{
    SetAbove24MP(false);
  }
  if(cam===48){
    SetAbove48MP(true);
    SetLoadingCamera(true);
    setTimeout(() => {
      SetLoadingCamera(false);
    }, 3000)
  }
  else{
    SetAbove48MP(false) 
  }
}

//battery
function clickBattery(batt){
  SetBattery(batt);

  if(batt===2000){
    SetAbove2000(true);
    SetLoadingBattery(true);
    setTimeout(() => {
      SetLoadingBattery(false);
    }, 3000)
  }
  else{
    SetAbove2000(false);
  }

  if(batt===3500){
    SetAbove3500(true);
    SetLoadingBattery(true);
    setTimeout(() => {
      SetLoadingBattery(false);
    }, 3000)
  }
  else{
    SetAbove3500(false);
  }

  if(batt===5000){
    SetAbove5000(true);
    SetLoadingBattery(true);
    setTimeout(() => {
      SetLoadingBattery(false);
    }, 3000)
  }
  else{
    SetAbove5000(false) 
  }
}

//price
function clickPrice(cost){
  SetPrice(cost);
  if(cost===13000){
    SetBelow13(true);
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000)
  }
  else{
    SetBelow13(false);
    
  }
  if(cost===17000){
    SetBelow17(true);
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000)
  }
  else{
    SetBelow17(false)
  }
  if(cost===20000){
    SetBelow20(true);
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000)
  }
  else{
    SetBelow20(false)
    
  }
}


//brand
function clickMobile(name){
  SetMobile(name)
  if(name==="Vivo"){
    AddVivo(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)

  }
  else{
    AddVivo(false);
  }
  if(name==="Oppo"){
    AddOppo(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddOppo(false);
    
  }
  if(name==="Samsung"){
    AddSamsung(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddSamsung(false);
  }
  if(name==="Xiaomi"){
    AddXiaomi(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddXiaomi(false);
  }
  if(name==="Oneplus"){
    AddOneplus(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddOneplus(false);
  }
  if(name==="Poco"){
    AddPoco(true);
    SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddPoco(false);
  }
  if(name==="Realme"){
    AddRealme(true);
        SetLoadingBrand(true);
    setTimeout(()=>{
      SetLoadingBrand(false);
    },3500)
  }
  else{
    AddRealme(false);
 }
}


return(<>

<button 
className="cursor-pointer hover:text-white text-xl w-full pt-4 pb-3 rounded bg-transparent text-center lg:hidden md:hidden hover:bg-blue transition duration-300"
 type="button"
 onClick={() => openFilter()}>
<span>{ Open ? close : filterIcon} Use Filters</span>
</button>

<div className="lg:grid lg:grid-cols-12 overflow-hidden md:grid md:grid-cols-12"> 
<div className={"mx-10 my-7 lg:w-full p-2 h-full shadow-xl lg:col-span-2 rounded-xl lg:block md:block md:col-span-6 " + (FilterOpen ? " " : " hidden")} >
<div className="mb-2">
<span className=" text-left font-bold text-2xl lg:inline-block hidden ">Filters <img className="lg:inline-block lg:ml-24" src="https://i.ibb.co/D5cPpW8/filter-removebg-preview.png" width="40" height="40" alt="filter" border="0"></img> </span>

</div>


<h1 className="font-semibold text-lg lg:inline-block text-center">Brand List</h1>
<button className={"ml-14  btn btn-xs btn-accent loading " +(LoadingBrand  ? "": "hidden")}>loading</button>
<div className="space-x-3 space-y-3 mt-3 "> 
<button type="button" onClick={()=>clickMobile("Vivo")}  className={" ml-3 transition duration-500 ease-in-out hover:bg-vivo hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-vivo rounded shadow " +(Vivo ? " bg-vivo text-white" : " text-vivo")}>vivo </button>
<button type="button" onClick={()=>clickMobile("Xiaomi")} className={" ml-3 transition duration-500 ease-in-out hover:bg-xiaomi hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-xiaomi rounded shadow " +(Xiaomi ? " bg-xiaomi text-white" : " text-xiaomi")}>Xiaomi</button>
<button type="button" onClick={()=>clickMobile("Oppo")} className={" ml-3 transition duration-500 ease-in-out hover:bg-oppo hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-oppo rounded shadow " +(Oppo ? " bg-oppo text-white" : " text-oppo")}>oppo</button>
<button type="button" onClick={()=>clickMobile("Poco")} className={" ml-3 transition duration-500 ease-in-out hover:bg-poco hover:text-black transform hover:-translate-y-1 hover:scale-110 font-semibold py-2 px-5 border border-poco rounded shadow " +(Poco ? " bg-poco text-black" : " text-poco")}>Poco</button>
<button type="button" onClick={()=>clickMobile("Oneplus")} className={" ml-3 transition duration-500 ease-in-out hover:bg-oneplus hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-oneplus rounded shadow " +(Oneplus ? " bg-oneplus text-white" : " text-oneplus")}>oneplus</button>
<button type="button" onClick={()=>clickMobile("Realme")} className={" ml-3 transition duration-500 ease-in-out hover:bg-realme hover:text-grey transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-realme rounded shadow " +(Realme ? " bg-realme text-grey" : " text-realme")}>Realme</button>
<button type="button" onClick={()=>clickMobile("Samsung")} className={" ml-3 transition duration-500 ease-in-out hover:bg-samsung hover:text-white transform hover:-translate-y-1 hover:scale-110  font-semibold py-2 px-5 border border-samsung rounded shadow " +(Samsung ? " bg-samsung text-white" : " text-samsung")}>Samsung</button>
</div>

<h1 className="font-semibold text-lg mt-2 lg:inline-block text-center">Price List</h1>
<button className={"ml-14  btn btn-xs btn-accent loading " +(Loading  ? "": "hidden")}>loading</button>
<div className="text-center space-y-3 mt-4 mb-4">
<button type="button" onClick={()=>clickPrice(13000)} className={"hover:bg-litegreen hover:text-white transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below13 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 13000</button><br/>
<button type="button" onClick={()=>clickPrice(17000)} className={"hover:bg-litegreen hover:text-white transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below17 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 17000</button><br/>
<button type="button" onClick={()=>clickPrice(20000)} className={"hover:bg-litegreen hover:text-white transition duration-500 ease-in-out font-semibold py-2 px-5 border border-gray rounded shadow" +(Below20 ? " bg-litegreen text-white" : "text-black")}>Below ₹ 20000</button><br/>      
</div>


<h1 className="text-left font-semibold text-lg mt-10 lg:inline-block text-center">Battery</h1>
<button className={"ml-16  btn btn-xs btn-accent loading " +(LoadingBattery  ? "": "hidden")}>loading</button>
<div className="text-center space-y-3 mt-4"> 
<button type="button" onClick={()=>clickBattery(2000)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above2000 ? " bg-litegreen text-white" : "text-black")}>Above 2000 mAH</button><br/>
<button type="button" onClick={()=>clickBattery(3500)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above3500 ? " bg-litegreen text-white" : "text-black")}>Above 3500 mAH</button><br/>
<button type="button" onClick={()=>clickBattery(5000)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above5000 ? " bg-litegreen text-white" : "text-black")}>Above 5000 mAH</button><br/>
</div>

<h1 className="text-left font-semibold text-lg mt-10 lg:inline-block text-center">Camera</h1>
<button className={"ml-16  btn btn-xs btn-accent loading " +(LoadingCamera ? "": "hidden")}>loading</button>

<div className="text-center space-y-3 mt-3"> 
<button type="button" onClick={()=>clickCamera(12)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above12MP ? " bg-litegreen text-white" : "text-black")}>12MP and above</button><br/>
<button type="button" onClick={()=>clickCamera(24)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above24MP ? " bg-litegreen text-white" : "text-black")}>24MP and above</button><br/>
<button type="button" onClick={()=>clickCamera(48)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow"+(Above48MP ? " bg-litegreen text-white" : "text-black")}>48MP and above</button><br/>
</div>

<h1 className="text-left font-semibold text-lg mt-10 lg:inline-block text-center">Screen</h1>
<button className={"ml-16  btn btn-xs btn-accent loading " +(LoadingDisplay ? "": "hidden")}>loading</button>
<div className="text-center space-y-3 mt-3"> 
<button type="button" onClick={()=>clickDisplay(5.2)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow "+(Inch52 ? " bg-litegreen text-white" : "text-black")}>5.2 inch and above</button><br/>
<button type="button" onClick={()=>clickDisplay(5.5)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow "+(Inch55 ? " bg-litegreen text-white" : "text-black")}>5.5 inch and above</button><br/>
<button type="button" onClick={()=>clickDisplay(5.9)} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow "+(Inch6 ? " bg-litegreen text-white" : "text-black")}>6 inch and above</button><br/>
</div>

<h1 className="text-left font-semibold text-lg mt-10 lg:inline-block text-center">Sort By</h1>
<button className={"ml-16  btn btn-xs btn-accent loading " +(LoadingSort ? "": "hidden")}>loading</button>
<div className="text-center space-y-3 mt-3"> 
<button type="button" onClick={()=>clickSort("ASC")} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow "+(Asc ? " bg-litegreen text-white" : "text-black")}>Price Low to High</button><br/>
<button type="button" onClick={()=>clickSort("DESC")} className={"hover:bg-litegreen transition hover:text-white duration-500 ease-in-out font-semibold py-2 px-5 border border-grey rounded shadow "+(Dsc ? " bg-litegreen text-white" : "text-black")}>Price High to Low</button><br/>
</div>

</div>
<div className="lg:col-span-10 md:col-span-6">
 <GetMobile name={Mobile} cost={Price} batt={Battery} cam={Camera} disp={Display} search={Search} sort={Sort}/>
</div>
</div>
</>)

}

export default Filter;
