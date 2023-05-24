import React from "react";
import "./content.css";
import Divider from "@mui/material/Divider";
import High from "../second/High";

const Content = () => {
  return (
    <div className="cont">
      <h3> ABOUT OUR COMPANY____</h3>

      <h1 className="Head"> Our Success Formula is D3</h1>

      <div className="para">
        <p>
          We’re a young and talented group of entrepreneurs and engineers with a
          groundbreaking idea designed to contribute towards a better tomorrow.
          We provide smart solutions for companies of all sizes and pride
          ourselves on our unparalleled, dedicated service. At Cosecant Inc, we
          believe that the right understanding and technological edge can lead
          companies towards a successful future.&nbsp;
        </p>
      </div>

      <img
        className="img2"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8D7qXeRSJEotmp5QhMudqkBPI8UPcl4nq9QheyCXX04TIa7_6"
      ></img>

      <div className="sub">
        {" "}
        <strong>Great results,can be achieved with small forces.</strong>
      </div>
      <div className="div">
        {" "}
        <Divider light />
      </div>
      <div>
        <button className="button">DISCOVER MORE</button>
      </div>
      <High />
    </div>
  );
};

export default Content;
