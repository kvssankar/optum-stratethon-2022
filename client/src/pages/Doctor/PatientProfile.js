import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../../components/Loader/PageLoader";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import { usePatientStore } from "../../store/patientStore";

const PatientProfile = () => {
  const { pid } = useParams();
  const sessions = usePatientStore((state) => state.sessions);
  const getPatientSessions = usePatientStore(
    (state) => state.getPatientSessions
  );
  useEffect(() => {
    getPatientSessions(pid);
  }, []);
  return sessions ? (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Patient History</h1>
      <AllSessionTable />
    </div>
  ) : (
    <PageLoader />
  );
};

export default PatientProfile;
