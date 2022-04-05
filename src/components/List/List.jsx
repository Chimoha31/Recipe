import React, {useState} from "react";
import Search from "./Seach";
import EachItem from './EachItem';
import "./List.css";

function List() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <Search setRecipes={setRecipes} />
      <EachItem />
    </div>
  );
}

export default List;
