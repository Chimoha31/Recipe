import "./App.css";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Title />}/>
          <Route path="/recipe" element={ <Header />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
