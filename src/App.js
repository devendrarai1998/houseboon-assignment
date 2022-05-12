import React from "react";
import Header from "./Header";
import Card from "./Card";
import SearchAppBar from "./SearchAppBar";
import Feature from "./Feature";
import "./App.css";

function App(){
  return(
    <div className="app">
      <Header />
      {/* <div className="Search"> */}
          <div className="text-h1">
            <h1> We care about your renting worries.</h1>
            <h4> Building the largest brokerage free community.</h4>
          </div>
          <SearchAppBar  className="Search" />
     {/*  </div> */}
      
      <Card />
      <Feature />
    </div>
  );
}

export default App;