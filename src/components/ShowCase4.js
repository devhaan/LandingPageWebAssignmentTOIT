import React from "react";
import pngBeer from "../img//tuxpi.com.1663576516-removebg-preview (1).png";

export default function ShowCase4() {
  return (
    <>
      <div
        className="d-flex justify-content-around"
        style={{
          height: "40rem",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "40rem",
            width: "50%",
            backgroundColor: "#CA9E67",
          }}
        >
          <div
            className="d-flex justify-content-around p-5"
            style={{
              height: "40rem",
              width: "100%",
              position: "relative",
              left: "35%",
            }}
          >
            <div
              className="d-flex flex-column text-white mt-5"
              style={{
                width: "50%",
                marginLeft: "-2rem",
                position: "absolute",
              }}
            >
              <div
                className=""
                style={{
                  position: "absolute",
                  width: "120rem",
                  left: "-80%",
                  top: "2rem",
                }}
              >
                <b
                  className="lh-1"
                  style={{
                    fontSize: "80px",
                    width: "100%",
                    fontWeight: "100",
                  }}
                >
                  WANT TO PURCHASE <br></br>OUR MERCHANDISE
                </b>
              </div>
              <div
                className="m-5"
                style={{
                  position: "absolute",
                  width: "120rem",
                  left: "-90%",
                  top: "13rem",
                }}
              >
                <p>
                  Toit is a brew pub, brewing a revolutionary <br></br>culture.
                  We started out as a sweet little <br></br>Bengaluru brewing
                  culture with the promise of <br></br>some bodacious brews, fabulous
                  foods and a <br></br>supreme brew-pub experience
                </p>
              </div>
              <div
              style={{
                  position: "absolute",
                  width: "120rem",
                  left: "-70%",
                  top: "25rem",
                }}>
                <button class="btn btn-dark rounded-pill">Shop Now --></button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-5"
          style={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp9387638.jpg")`,
            height: "40rem",
            width: "50%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <img  className="m-5" src="https://toit.in/wp-content/uploads/2022/02/Group-336.png" style={{
                width:"85%",
                height:"90%",
            
            }}
                alt="demo"
            />
        </div>
      </div>
    </>
  );
}
