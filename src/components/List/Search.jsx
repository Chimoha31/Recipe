import React, { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import "./Search.css";
import search from '../../gif/search.gif';

const { REACT_APP_ID, REACT_APP_KEY } = process.env;
function Search({setRecipes}) {
  // useState()---------------------------------
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState("");
 
  //--------------------------------------------

  // API-----------------------------------------
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${item}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  // --------------------------------------------

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    // getRecipe();
  }, [item]);

  return (
    <div className="search_container">
      <div className="search">
        <form onSubmit={handleSubmit} className="form_container">
          <Input
            placeholder="Search Recipe..."
            onChange={handleChange}
            value={inputValue}
            className="input"
          />
          <div className="search_icon" onClick={handleSubmit}>
            <img src={search} alt="seach icon" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
