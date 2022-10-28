import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";

const PatientPage = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route path='/session' element={<Home />} /> */}
    </Routes>
  );
};

export default PatientPage;
