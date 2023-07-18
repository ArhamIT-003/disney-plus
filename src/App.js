import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
