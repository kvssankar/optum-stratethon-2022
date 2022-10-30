import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDoctorStore } from "../../store/doctorStore";

function DoctorPrivateRoute({ path, children, ...rest }) {
  const doctor = useDoctorStore((state) => state.doctor);
  return doctor !== null ? <Outlet /> : <Navigate to="/login/doctor" />;
}

export default DoctorPrivateRoute;
