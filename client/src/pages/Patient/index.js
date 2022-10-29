import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const PatientPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default PatientPage;
