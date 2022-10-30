import React from "react";
import { Route, Routes } from "react-router-dom";
// import PerformLabTest from "./pages/Patient/performLabTest.js";
import PatientSession from "./pages/Patient/Session.js";
import DoctorSession from "./pages/Doctor/DoctorSession.js";
// import TestProgress from "./pages/Patient/Testprogress";
// import LabTests from "./pages/Patient/LabTests";
import PatientAuthentication from "./pages/Patient/Authentication";
import DoctorHome from "./pages/Doctor/Home";
import PatientHome from "./pages/Patient/Home";
import CreateSession from "./pages/Patient/CreateSession.js";
import CreateRecord from "./pages/Doctor/CreateRecord.js";
import DoctorAuthentication from "./pages/Doctor/Authentication";
import PatientPrivateRoute from "./pages/Patient/PatientPrivateRoute.js";
import DoctorPrivateRoute from "./pages/Doctor/DoctorPrivateRoute.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/login/patient" element={<PatientAuthentication />} />
      <Route path="/login/doctor" element={<DoctorAuthentication />} />
      <Route path="/patient" element={<PatientPrivateRoute />}>
        <Route index={true} element={<PatientHome />} />
        <Route path="book-appointment" element={<CreateSession />} />
        <Route path="session/:session_id" element={<PatientSession />} />
      </Route>
      <Route path="/doctor" element={<DoctorPrivateRoute />}>
        <Route index={true} element={<DoctorHome />} />
        <Route path="create-record/:pid/:sid" element={<CreateRecord />} />
        <Route path="session/:session_id" element={<DoctorSession />} />
      </Route>
    </Routes>
  );
}

export default App;
