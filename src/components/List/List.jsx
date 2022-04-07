import React, { useState } from "react";
import Search from "./Search";
import EachItem from "./EachItem";
import "./List.css";
import { v4 as uuidv4 } from "uuid";

function List() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <Search setRecipes={setRecipes} />
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <EachItem key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default List;
