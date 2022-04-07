import React, { useState } from "react";
import "./EachItem.css";
import Ingredient from "../Ingredients/Ingredients";

function EachItem({ recipe }) {
  const [show, setShow] = useState(false);

  const { image, label, cuisineType, url } = recipe.recipe;

  return (
    <div>
      <div className="recipe_list">
        <ul>
          <div className="recipe_item">
            <li>
              <img src={image} alt="recipe" />
            </li>
            <li>
              <h2>{label}</h2>
            </li>
            <li>
              <p>[{cuisineType}]</p>
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
    </div>
  );
}

export default EachItem;
