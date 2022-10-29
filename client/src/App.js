import React from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import PerformLabTest from "./pages/Patient/performLabTest.js";
import Session from "./pages/Patient/Session.js";
import DoctorSession from "./pages/Doctor/DoctorSession.js";
import TestProgress from "./pages/Patient/Testprogress";
import LabTests from "./pages/Patient/LabTests";
import PatientAuthentication from "./pages/Patient/Authentication";
import DoctorHome from "./pages/Doctor/Home";
import PatientHome from "./pages/Patient/Home";
import CreateSession from "./pages/Patient/CreateSession.js";
import CreateRecord from "./pages/Doctor/CreateRecord.js";
import DoctorAuthentication from "./pages/Doctor/Authentication";
import { usePatientStore } from "./store/patientStore.js";
import { useDoctorStore } from "./store/doctorStore";
import AllPatients from "./pages/Doctor/AllPatients.js";
function App() {
  const navigate = useNavigate();

  const patient = usePatientStore((state) => state.patient);
  const doctor = useDoctorStore((state) => state.doctor);
  return (
    <Routes>
      {/* PATIENT */}
      <Route
        path='/'
        element={
          patient ? <Navigate to='/patient' /> : <PatientAuthentication />
        }
      />
      <Route
        path='/patient'
        element={!patient ? <Navigate to='/' /> : <PatientHome />}
      />
      <Route
        path='/patient/create-session'
        element={!patient ? <Navigate to='/' /> : <CreateSession />}
      />

      <Route
        path='/session/:session_id'
        element={!patient ? <Navigate to='/' /> : <Session />}
      />
      <Route
        path='/session'
        element={!patient ? <Navigate to='/' /> : <Session />}
      />
      <Route
        path='/testProgress'
        element={!patient ? <Navigate to='/' /> : <TestProgress />}
      />
      <Route
        path='/labTests'
        element={!patient ? <Navigate to='/' /> : <LabTests />}
      />
      <Route
        path='/patient/perform-labtest'
        element={!patient ? <Navigate to='/' /> : <PerformLabTest />}
      />

      {/* DOCTOR */}
      <Route
        path='/doctor'
        element={
          !doctor ? <Navigate to='/doctor/authentication' /> : <DoctorHome />
        }
      />
      <Route
        path='/doctor/authentication'
        element={doctor ? <Navigate to='/doctor' /> : <DoctorAuthentication />}
      />
      <Route
        path='/doctor/session/:session_id2'
        element={!doctor ? <Navigate to='/' /> : <DoctorSession />}
      />
      <Route
        path='/doctor/create-record/:pid/:sid'
        element={!doctor ? <Navigate to='/' /> : <CreateRecord />}
      />
      <Route
        path='/doctor/allPatients'
        element={!doctor ? <Navigate to='/' /> : <CreateRecord />}
      />
    </Routes>
  );
}

export default App;
