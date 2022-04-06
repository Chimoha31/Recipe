import React from 'react';
import './Title.css';
import lemmon from '../../gif/lemmon.gif';

function Title() {

  return (
    <div className="wrapper">
      <div className="left"></div>
      <div className="right"></div>

      <div className="stripes">
      <div className="left_stripe"></div>
      <div className="right_stripe"></div>
    </div>

    <img src={lemmon} alt="apple" />
    
    <div className="product_text">
      <h1 className="product_title">Ezy Pzy Recipe</h1>
      <p className="product_subtitle">-Find your ideal recipe to cook-</p>
    </div>
    </div>
  )
}

export default Title
