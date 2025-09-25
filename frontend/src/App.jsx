import React from "react";
import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/RegisterPage"; 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
