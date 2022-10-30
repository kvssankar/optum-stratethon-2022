import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usePatientStore } from "../../store/patientStore";

function PatientPrivateRoute({ path, children, ...rest }) {
  const patient = usePatientStore((state) => state.patient);
  return patient !== null ? <Outlet /> : <Navigate to="/login/patient" />;
}

export default PatientPrivateRoute;
