import React from "react";
import pngBeer from "../img//tuxpi.com.1663576516-removebg-preview (1).png";

export default function Footer() {
  return (
    <>
      <div
        className="d-flex justify-content-around text-white"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2018/06/24/08/01/dark-background-3494082_1280.jpg")`,
          height: "40rem",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex flex-column justify-content-center m-5 "
          style={{
            width: "33%",
            color:"#D27F05"
          }}
        >
          <a href="#" className="m-2"> -> About</a>
          <a href="#" className="m-2"> -> BEERS</a>
          <a href="#" className="m-2"> -> FOOD</a>
          <a href="#" className="m-2"> -> SHOP</a>
          <a href="#" className="m-2"> -> CONTACT</a>
        </div>
        <div
          className=""
          style={{
            width: "33%",
          }}
        >
          <div className="d-flex">
            <img
              className="img-fluid"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/489/981/small/wave-abstract-lines-background-line-art-png.png"
              alt="Beer Mug"
              width="250px"
              height="450px"
              style={{
                zIndex: "0",
                position: "absolute",
                top: "253.9rem",
                width: "650px",
                left: "-1%",

              }}
            />
            <img
              className="img-fluid"
              src="https://toit.in/wp-content/uploads/2022/02/Frame-9-1.png"
              alt="Beer Mug"
              width="250px"
              height="450px"
              style={{
                zIndex: "999",
                position: "relative",
                top: "19rem",
                left: "5rem",
              }}
            />
            <img
              className="img-fluid"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/489/981/small/wave-abstract-lines-background-line-art-png.png"
              alt="Beer Mug"
              width="250px"
              height="450px"
              style={{
                zIndex: "1",
                position: "absolute",
                top: "253.9rem",
                width: "650px",
                right: "-1%",
              }}
            />
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center m-5"
          style={{
            width: "33%",
            marginRight:"-1rem"
          }}
        >
          <div style={{
            width: "100%",
            marginLeft:"12rem",
            color:"#D27F05"
          }}>298,100 Ft Rd<br></br>Indira Nagar II Stage<br></br> Bengaluru 560038<br></br> Karnataka<br></br><br></br>+91 90197 13388 <br></br><br></br>toitblr@toit.in<br></br><br></br><br></br><br></br>All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}
