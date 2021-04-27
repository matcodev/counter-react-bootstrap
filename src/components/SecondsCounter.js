import React from "react";
import SecondCard from "./SecondCard";

const SecondsCounter = () => {



  return (
    <div className="container my-5">
      <div className="card d-flex flex-row py-3 px-5 bg-dark">
          
        <div className="card text-center mx-2" style={{ width: "8rem" }}>
          <div className="card-body">
            <i className="far fa-clock fa-5x"></i>
          </div>
        </div>

        <SecondCard 
            seconds = {0}
        />
         <SecondCard 
            seconds = {0}
        />
         <SecondCard 
            seconds = {0}
        />
         <SecondCard 
            seconds = {0}
        />
         <SecondCard 
            seconds = {0}
        />
         <SecondCard 
            seconds = {0}
        />
      </div>
    </div>
  );
};

export default SecondsCounter;
