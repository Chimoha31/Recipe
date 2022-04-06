import React from "react";

function Ingredients({ ingredients }) {
  return ingredients.map((ingredient) => {
    return (
      <ul>
        <li>{ingredient.text}</li>
      </ul>
    );
  });
}

export default Ingredients;
