import React, { useState, useEffect } from "react";
import "./List.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

function List() {
  const APP_ID = 
  const APP_KEY = 

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue])

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
