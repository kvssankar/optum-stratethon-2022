import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientPage from "./pages/Patient";
import Session from "./pages/Patient/Session.js";
function App() {
  return (
    <Routes>
      <Route path='/' element={<PatientPage />} />
      <Route path='/session' element={<Session />} />
    </Routes>
  );
}

export default App;
