import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./page/Product"
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/Login";
import Register from "./page/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
        </Route>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
