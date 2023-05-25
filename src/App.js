import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SinglePhonePage from "./pages/SinglePhonePage/SinglePhonePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SinglePhonePage />} path="/phone/:id" />
      </Routes>
    </div>
  );
}

export default App;
