import React from "react";
import pngBeer from "../img//tuxpi.com.1663576516-removebg-preview (1).png";

export default function ShowCase3() {
  return (
    <>
      <div
        className="d-flex justify-content-around"
        style={{
          backgroundImage: `url("https://c0.wallpaperflare.com/preview/380/997/248/beer-pub-wood-noir.jpg")`,
          height: "30rem",
          width: "100%",
          
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <img
            className="img-fluid"
            src="https://toit.in/wp-content/uploads/2022/02/Frame-9-1.png"
            alt="Beer Mug"
            width="250px"
            height="450px"
            style={{
              transform: "rotate(50deg)",
              position: "absolute",
              left: "-3%",
              top:"135rem"
            }}
          />
        </div>
        <div className="mt-5 container-fluid">
          <h1
            style={{
              fontWeight: "900",
              fontSize: "1000%",
              color: "#dec37a",
              position: "absolute",
              top: "143rem",
            }}
          >
            LOVE
          </h1>
        </div>
        <div className=" container-fluid">
          <img
            className="img-fluid"
            src={pngBeer}
            alt="beer bottle"
            style={{
              transform: "rotate(-50deg)",
              position: "absolute",
              top:"138rem",
              right:"0%"
              
            }}
          />
         
         
        </div>
      </div>
    </>
  );
}
