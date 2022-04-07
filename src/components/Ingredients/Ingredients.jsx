import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./Ingredients.css";

function Ingredients({ ingredients }) {
  return (
    <>
      {ingredients.map((ingredient, index) => (
        <ul key={index} className="ingredients_detail">
          <li className="list">
            <span className="order">{index + 1}</span>
            {ingredient.text}
          </li>
        </ul>
      ))}
    </>
  );
}

export default Ingredients;
