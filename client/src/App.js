import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Session from "./pages/Patient/Session.js";
import TestProgress from "./pages/Patient/Testprogress";
import LabTests from "./pages/Patient/LabTests";
import PatientAuthentication from "./pages/Patient/Authentication";
import DoctorHome from "./pages/Doctor/Home";
import PatientHome from "./pages/Patient/Home";
import { usePatientStore } from "./store/patientStore";
import DoctorAuthentication from "./pages/Doctor/Authentication";
function App() {
  const patient = usePatientStore((state) => state.patient);
  return (
    <Routes>
      <Route path='/' element={<PatientAuthentication />} />
      <Route path='/patient' element={<PatientHome />} />
      <Route path='/session' element={<Session />} />
      <Route path='/testProgress' element={<TestProgress />} />
      <Route path='/labTests' element={<LabTests />} />
      {/* <Route path='authentication' element={<Authentication />} /> */}
      <Route path='/doctor' element={<DoctorHome />} />
      <Route path='/doctor/authentication' element={<DoctorAuthentication />} />
    </Routes>
  );
}

export default App;
