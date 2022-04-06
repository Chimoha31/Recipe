import React from "react";
import "./EachItem.css";
import Ingredient from '../Ingredients/Ingredients';

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
                  <span className="btn">Ingredients</span>
                  <Ingredient ingredients={recipe.recipe.ingredients} />
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
