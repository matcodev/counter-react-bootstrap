import React from 'react'

const SecondCard = (props) => {
    return (
        <div className="card text-center m-2" style={{ width: "8rem" }}>
          <div className="card-body fs-1">
            <span>{props.seconds}</span>
          </div>
        </div>
    );
} 
export default SecondCard;