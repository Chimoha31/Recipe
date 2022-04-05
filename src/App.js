import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Ingredients from "./components/Ingredients/Ingredients";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
