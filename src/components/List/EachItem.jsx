import React, { useState } from "react";
import "./EachItem.css";
import Ingredient from "../Ingredients/Ingredients";
import caloriesIcon from "../../images/calories.png";
import clock from "../../gif/clock.gif";

function EachItem({ recipe }) {
  const [show, setShow] = useState(false);

  const { image, label, cuisineType, url, calories, totalTime } = recipe.recipe;

  return (
    <div className="each_item">
      <ul>
        <div className="recipe_item">
          <li className="img_container">
            <img src={image} alt="recipe" />
          </li>
          <li>
            <div className="title_container">
              <h2>{label}</h2>
              <div className="clock_container">
                <img src={clock} alt="clock icon" />
                <p>{totalTime}</p>
              </div>
            </div>
          </li>
          <li className="cuisine">
            <p>[{cuisineType}]</p>
          </li>
          <li>
            <div className="calories_container">
              <img src={caloriesIcon} alt="calories icon" />
              <p>{Math.floor(calories)}cal</p>
            </div>
          </li>
          {/* Btn */}
          <div className="link_btn">
            <li className="detail_btn">
              <a
                href={url}
                className="detail_link"
                target="_blank"
                rel="noreferrer"
              >
                Detail
              </a>
            </li>
            <li className="ingredients_btn">
              <span className="btn" onClick={() => setShow(!show)}>
                Ingredients
              </span>
              {show && <Ingredient ingredients={recipe.recipe.ingredients} />}
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default EachItem;
