import React from "react";
import SecondCard from "./SecondCard";

const SecondsCounter = (props) => {

  console.log('aqui')

  return (
    <div className="container my-5">
      <div className="col-sm-12 card d-flex flex-row py-3 px-5 bg-dark">
          
        <div className="card text-center mx-2" style={{ width: "8rem" }}>
          <div className="card-body">
            <i className="far fa-clock fa-5x"></i>
          </div>
        </div>

        <SecondCard 
            seconds = {props.num6 % 10}
        />
         <SecondCard 
            seconds = {props.num5 % 10}
        />
         <SecondCard 
            seconds = {props.num4 % 10}
        />
         <SecondCard 
            seconds = {props.num3 % 10}
        />
         <SecondCard 
            seconds = {props.num2 % 10}
        />
         <SecondCard 
            seconds = {props.num1 % 10}
        />
      </div>
    </div>
  );
};

export default SecondsCounter;
