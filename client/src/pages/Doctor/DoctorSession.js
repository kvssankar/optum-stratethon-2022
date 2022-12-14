import React, { useEffect } from "react";
import DetailedSession from "../../components/Doctor/Session/DetailedSession";
import Sidebar from "../../components/Doctor/Sidebar";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import AllRecords from "../../components/Doctor/Session/AllRecords";
import { useNavigate } from "react-router-dom";
import { usePatientStore } from "../../store/patientStore";
import { useDoctorStore } from "../../store/doctorStore";
const Session = () => {
  const navigate = useNavigate();
  const { session_id } = useParams();
  const particularSession = usePatientStore((state) => state.particularSession);
  const datewiseRecords = useDoctorStore((state) => state.datewiseRecords);
  const getDatewiseRecords = useDoctorStore(
    (state) => state.getDatewiseRecords
  );
  const getRecordsBySessionId = useDoctorStore(
    (state) => state.getRecordsBySessionId
  );
  const getParticularSession = usePatientStore(
    (state) => state.getParticularSession
  );
  useEffect(() => {
    getParticularSession(session_id);
    getRecordsBySessionId(session_id);
    getDatewiseRecords(session_id);
  }, []);

  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      {particularSession && datewiseRecords && (
        <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
          <DetailedSession session_id={session_id} />
          <div className="flex justify-between mb-3">
            <h1 className="text-xl text-blue-500 font-semibold mb-3">
              Records
            </h1>
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() =>
                navigate(
                  "/doctor/create-record/" +
                    particularSession.patient_id._id +
                    "/" +
                    session_id
                )
              }
            >
              Create New Record
            </Button>
          </div>
          <div>
            <AllRecords session_id={session_id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
