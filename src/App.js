import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import Marker from "./components/Marker";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/intropage" element={<IntroPage />} />
        <Route path="/marker" element={<Marker />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<Navigate to="/intropage" />} />
      </Routes>
    </Router>
  );
};

export default App;
