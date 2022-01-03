import React, { useState } from "react";
import Base from "./base";
import Wheel from './pages/home/';

const Home = (props) => {
  let places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Chinese food', 'Pastas','Chicken'];
  return (
    <Base>
      <div>
      <div className="App">
        <h1>What should you eat today?</h1>
        <span className="spnTxt">Enter Player name is mandetory</span>
         <Wheel items={places} />
   
       
      </div>
      </div>
    
    </Base>
  );


};

export default Home;
