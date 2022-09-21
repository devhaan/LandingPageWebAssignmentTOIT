import React, { useState, useEffect } from "react";

function Navbar(props) {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-start"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1603397600992-a9734a72b69c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcnR5JTIwYmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,
          height:"40rem",
        }}
      >
        <div className="text-white flex-fill m-5  "><b>M e n u</b></div>
        <div className="flex-fill  m-2 " style={{width:"0px"}}>
          <img className=" ml-5 "
            src="https://exotel.com/wp-content/uploads/2017/11/toit-logo-e1510133156215.png"
            alt="beer logo"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "25%",

            }}
          />
        </div>
        <div
          className="d-flex justify-content-around m-5 text-white"
          style={{ width: "35%" }}
        >
          <div>KUDIX</div>
          <div>RESERVATION</div>
          <div>BREWERY TOUR</div>
          <div className="border border-white  border-1 p-1">FIND MY BEER</div>
        </div>
        <div className="" style={{position:"absolute",top:"12rem",left:"29rem"}}>
            <b
              className="display-1"
              style={{
                fontSize: "140px",
                fontWeight: "900",
                color: "white",
               
              }}
            >
              TOIT<br></br>
            </b>
            <b
              className="display-1"
              style={{
                fontSize: "140px",
                fontWeight: "900",
                color: "transparent",
                webkitTextStroke: "3px white",
              }}
            >
              BEER
            </b>
          </div>
         
        </div>
      
    </>
  );
}

export default Navbar;
