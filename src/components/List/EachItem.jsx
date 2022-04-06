import React, { useState } from "react";
import "./EachItem.css";
import Ingredient from "../Ingredients/Ingredients";
import { v4 as uuidv4 } from "uuid";

function EachItem({ recipes }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="recipe_list">
        <ul>
          {recipes.map((recipe) => (
            <div key={uuidv4()} className="recipe_item">
              <li>
                <img src={recipe.recipe.image} alt="recipe" />
              </li>
              <li>
                <h2>{recipe.recipe.label}</h2>
              </li>
              <li>
                <p>[{recipe.recipe.cuisineType}]</p>
              </li>
              {/* Btn */}
              <div className="link_btn">
                <li className="detail_btn">
                  <a href={recipe.recipe.url} className="detail_link">
                    Detail
                  </a>
                </li>
                <li className="ingredients_btn" onClick={handleClick}>
                  <span className="btn">Ingredients</span>
                  {show && (
                    <Ingredient ingredients={recipe.recipe.ingredients} />
                  )}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EachItem;
