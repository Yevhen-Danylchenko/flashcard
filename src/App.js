import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../src/style.css"
import Home from "./components/Home";
import History from "./components/History";
import Geography from "./components/Geography";
import Physics from "./components/Physics";
import Sport from "./components/Sport";

function App() {
  return (
    <Router>
      <div className="navContent">
        <h1 className="title">Головна сторінка</h1>
        <nav>
          <ul className="flex ul-content">
            <li>
              <Link className="link" to="/">
                Головна сторінка
              </Link>
            </li>
            <li>
              <Link className="link" to="/History">
                Історія
              </Link>
            </li>
            <li>
              <Link className="link" to="/Geography">
                Географія
              </Link>
            </li>
            <li>
              <Link className="link" to="/Physics">
                Фізика
              </Link>
            </li>
            <li>
              <Link className="link" to="/Sport">
                Спорт
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/Geography" element={<Geography />} />
          <Route path="/Physics" element={<Physics />} />
          <Route path="/Sport" element={<Sport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
