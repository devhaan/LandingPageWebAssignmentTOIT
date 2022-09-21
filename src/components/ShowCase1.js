import React from "react";

export default function ShowCase1() {
  return (
    <>
      <div
        class="d-flex flex-row bd-highlight bg-dark"
        style={{
          height: "40rem",
          width: "100%",
        }}
      >
        <div
          class=" bd-highlight bg-danger d-flex flex-column  justify-content-center"
          style={{
            backgroundImage: `url("https://media.istockphoto.com/photos/girl-pouring-a-pint-of-dark-beer-in-a-craft-beer-pub-local-pub-shiny-picture-id1039178006?k=20&m=1039178006&s=612x612&w=0&h=F0ap4KxuBzRtPs_clEez6cyQ9RJBBHd7bpY4HJ0b6_o=")`,
            height: "40rem",
            width: "33%",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="">
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "white",
                marginLeft:"1.5rem"
              }}
            >
              BA
            </b>
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "transparent",
                webkitTextStroke: "1px White",
              }}
            >
              RS
            </b>
          </div>
          <div className="text-white" style={{marginLeft:"2rem"}}>
            <p className="lh-1">Lorem Lpsum Dollor Dummy <br></br>Text should be here</p> 
          </div>
        </div>
        <div
          class=" bd-highlight bg-primary d-flex flex-column  justify-content-center "
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtX-HukIgOphmoYWLWFdou7cmNheKjR45535eqCTRTsNydJjJgiq3Ac1LbFwQzZ5WULY&usqp=CAU")`,
            height: "40rem",
            width: "33%",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="">
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "white",
                marginLeft:"7rem"
              }}
            >
              BE
            </b>
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "transparent",
                webkitTextStroke: "1px white",
              }}
            >
              ERS
            </b>
          </div>
          <div className="text-white" style={{marginLeft:"7.5rem"}}>
            <p className="lh-1">Lorem Lpsum Dollor Dummy <br></br>Text should be here</p> 
          </div>
        </div>
        <div
          class=" bd-highlight bg-warning d-flex flex-column  justify-content-center"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzFUASkS7H3QYM6JjRFo6TB2Gnl7stcYbat4YZ5PwZ2Hj12cL7FURZBgE0kMQ5Cdapwc&usqp=CAU")`,
            height: "40rem",
            width: "33%",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
           <div className="">
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "white",
                marginLeft:"5.5rem"
              }}
            >
              BREW
            </b>
            <b
              className="display-1"
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "transparent",
                webkitTextStroke: "1px White",
              }}
            >
              ER
            </b>
          </div>
          <div className="text-white" style={{marginLeft:"6rem"}}>
            <p className="lh-1">Lorem Lpsum Dollor Dummy <br></br>Text should be here</p> 
          </div>
        </div>
      </div>
    </>
  );
}
