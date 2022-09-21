import React from "react";
import pngBeer from "../img//tuxpi.com.1663576516-removebg-preview (1).png";
import logo from "../img/kisspng-logo-font-entrepreneurship-book-lorem-ipsum-entrepreneurial-freedom-creating-success-amp-liv-5c5b4feb110375.5824973315494881070697.png";
export default function ShowCase2() {
  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundImage: `url("https://st3.depositphotos.com/19019230/36501/i/450/depositphotos_365010294-stock-photo-abstract-black-shapes-background-texture.jpg")`,
        height: "70rem",
        width: "100%",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-around p-5">
        <div
          className="d-flex flex-column text-white mt-5"
          style={{ width: "50%", marginLeft: "-12rem", position: "absolute" }}
        >
          <div className="m-1">ABOUT US</div>
          <div className=" display-4">
            <b className="">
              WE ARE TOIT.<br></br> YOU SHOULD BE TOO .....
            </b>
          </div>
          <div className="m-2">
            <p className="fs-6">
              Toit is a brew pub, brewing a revolutionary <br></br>culture. We
              started out as a sweet little <br></br>Bengaluru brewing culture
              with the promise of <br></br>some bodacious brews, fabulous foods
              and a <br></br>supreme brew-pub experience
            </p>
          </div>
          <div style={{ color: "#634E36" }}>
            <b>EXPLORE</b>
            <img
              src="https://cdn-icons-png.flaticon.com/512/556/556670.png"
              style={{
                width: "20px",
                height: "15px",
                marginLeft: "0.5rem",
                marginTop: "-0.2rem",
              }}
              alt="demo"
            />
          </div>
        </div>
        <div
          className="text-white"
          style={{
            backgroundImage: `url("https://assets.architecturaldigest.in/photos/6008351b274aca243711be40/master/w_1600%2Cc_limit/Toit-Pune-brewpub-10.jpg")`,
            height: "25rem",
            width: "50%",
            marginTop: "1.5rem",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginLeft: "40rem",
            opacity: "0.5",
          }}
        ></div>
      </div>
      <div
        className="text-white d-flex flex-column p-3"
        style={{ width: "100%", marginLeft: "45%", marginTop: "8%" }}
      >
        <div className="m-3">
          <b>TOIT BREWERY</b>
        </div>

        <div className="m-4">
          <img
            src="https://exotel.com/wp-content/uploads/2017/11/toit-logo-e1510133156215.png"
            alt="beer logo"
            style={{
              width: "5rem",
              height: "5rem",
            }}
          />
        </div>
        <div className="mt-5" style={{
                fontSize: "40px",
                fontWeight: "900",
                color: "transparent",
                webkitTextStroke: "1px White",
                marginLeft: "-22%",

              }}>COME BY. TRY EVERYTHING TWICE</div>
      </div>
    </div>
  );
}
