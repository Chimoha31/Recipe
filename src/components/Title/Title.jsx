import React from "react";
import "./Title.css";
import lemmon from "../../gif/lemmon.gif";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div className="wrapper">
      <div className="left"></div>
      <div className="right"></div>

      <div className="stripes">
        <div className="left_stripe"></div>
        <div className="right_stripe"></div>
      </div>

      <div className="lemmon">
        <img src={lemmon} alt="apple" />
      </div>
      <div className="product_text">
        <h1 className="product_title">Ezy Pzy Recipe</h1>
        <p className="product_subtitle">-Find your ideal recipe to cook-</p>
      </div>

      <div className="start_btn">
        <Link to="/recipe" className="btn">Get Started</Link>
      </div>
    </div>
  );
}

export default Title;
