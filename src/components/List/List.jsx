import React, {useState} from "react";
import Search from "./Search";
import EachItem from './EachItem';
import "./List.css";

function List() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <Search setRecipes={setRecipes} />
      <EachItem recipes={recipes} />
    </div>
  );
}

export default List;
