import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import ImmediateInfo from "../../components/Patient/Profile/ImmediateInfo";
import Sidebar from "../../components/Patient/Sidebar";
import { usePatientStore } from "../../store/patientStore";
import PageLoader from "../../components/Loader/PageLoader";

const Home = () => {
  const patient = usePatientStore((state) => state.patient);
  const sessions = usePatientStore((state) => state.sessions);
  const getPatientSessions = usePatientStore(
    (state) => state.getPatientSessions
  );
  const logout = usePatientStore((state) => state.logout);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    logout();
  };

  useEffect(() => {
    if (patient) getPatientSessions(patient._id);
  }, [patient]);

  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      {patient && sessions ? (
        <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-blue-500 text-lg">
              Welcome {patient.name && (patient.name || patient.data.name)}
            </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <button type="submit" className="font-bold text-blue-500 text-lg">
                Logout
              </button>
            </form>
          </div>
          <p className="text-sm">How are you doing ?</p>
          <ImmediateInfo />
          <div className="flex justify-between mb-3">
            <h1 className="text-xl text-blue-500 font-semibold mb-3">
              Sessions
            </h1>
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() => navigate("/patient/book-appointment")}
            >
              Create New Session
            </Button>
          </div>
          <div className="">
            <AllSessionTable />
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default Home;
