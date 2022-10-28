import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientPage from "./pages/Patient";
import Session from "./pages/Patient/Session.js";
import TestProgress from "./pages/Patient/Testprogress";
import LabTests from "./pages/Patient/LabTests";
import Authentication from "./pages/Authentication/Authentication";
function App() {
  return (
    <Routes>
      <Route path='/' element={<PatientPage />} />
      <Route path='/session' element={<Session />} />
      <Route path='/testProgress' element={<TestProgress />} />
      <Route path='/labTests' element={<LabTests />} />
      <Route path='authentication' element={<Authentication />} />
    </Routes>
  );
}

export default App;
