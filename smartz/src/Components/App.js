import React from "react";
import Filter from "./Filter"
import {  BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
function App(){
return (
    <>
    <Router>
    <Navbar/>
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/getMobilePhone/:id" exact component={withRouter(Filter)}></Route>
        <Route path="/getMobilePhone/:id/:price" exact component={withRouter(Filter)}></Route>
        <Route path="/getMobilePhone/:id/:price/:batt/:cam/:disp/:search/" exact component ={withRouter(Filter)}></Route>
        <Route path="/getMobilePhone/:id/:price/:batt/:cam/:disp/:search/:sorting" exact component ={withRouter(Filter)}></Route>
    </Switch>   
   </Router>
    </>
)}

export default App;