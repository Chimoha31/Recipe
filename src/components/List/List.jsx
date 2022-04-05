import React, { useState, useEffect } from "react";
import "./List.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const {REACT_APP_ID, REACT_APP_KEY} = process.env;

function List() {
  const getRecipe = async() => {
    const response = await fetch(`https://api.edamam.com/search?q="banana"&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  useEffect(() => {
    getRecipe();
  }, [])

  return (
    <div className="list_container">
      <div className="search">
        <Input
          placeholder="Placeholder"
          onChange={handleChange}
          value={inputValue}
        />
        <Button variant="contained">
          <Typography variant="p">Search</Typography>
        </Button>
      </div>
    </div>
  );
}

export default List;
