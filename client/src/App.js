import React from "react";
import { Route, Routes } from "react-router-dom";
import Session from "./pages/Patient/Session.js";
import TestProgress from "./pages/Patient/Testprogress";
import LabTests from "./pages/Patient/LabTests";
import Authentication from "./pages/Patient/Authentication";
import DoctorHome from "./pages/Doctor/Home";
import PatientHome from "./pages/Patient/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/patient" element={<PatientHome />} />
      <Route path="/session" element={<Session />} />
      <Route path="/testProgress" element={<TestProgress />} />
      <Route path="/labTests" element={<LabTests />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="/doctor" element={<DoctorHome />} />
    </Routes>
  );
}

export default App;
