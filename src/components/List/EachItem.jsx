import React from "react";
import { Link } from "react-router-dom";
import "./EachItem.css";

function EachItem({ recipes }) {
  return (
    <div>
      <div className="recipe_list">
        <ul>
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe_item">
              <li>
                <img src={recipe.recipe.image} alt="recipe" />
              </li>
              <li>
                <h2>{recipe.recipe.label}</h2>
              </li>
              <li>
                <p>[{recipe.recipe.cuisineType}]</p>
              </li>
              <div className="link_btn">
                <li className="ingredients_btn">
                  <Link to="/ingredients" className="link">Ingredients</Link>
                </li>
                <li className="detail_btn">
                  <Link to="" className="link">Detail</Link>
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
