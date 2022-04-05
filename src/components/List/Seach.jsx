import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import "./Search.css";

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
    getRecipe();
  }, [item]);

  return (
    <div className="list_container">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search..."
            onChange={handleChange}
            value={inputValue}
          />
          <Button variant="contained" onClick={handleSubmit} >
            <Typography variant="p">Search</Typography>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Search;
