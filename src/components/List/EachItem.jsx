import { Receipt } from "@mui/icons-material";
import React, { useState } from "react";
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
              {/* Btn */}
              <div className="link_btn">
                <li className="detail_btn">
                  <a href={recipe.recipe.url} className="detail_link">Detail</a>
                </li>
                <li className="ingredients_btn">
                  <span className="ingredients_link">Ingredients</span>
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
