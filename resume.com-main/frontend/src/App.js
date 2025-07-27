import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeWebsite from "./components/ResumeWebsite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;