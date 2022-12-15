
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />
       
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
