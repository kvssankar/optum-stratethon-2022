import React, { useState, useEffect } from "react";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import DetailedSession from "../../components/Doctor/Session/DetailedSession";
import Sidebar from "../../components/Doctor/Sidebar";
import ProgressBar from "../../components/Patient/Session/ProgressBar";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import AllRecords from "../../components/Doctor/Session/AllRecords";
import { useNavigate } from "react-router-dom";
import { usePatientStore } from "../../store/patientStore";
import { useDoctorStore } from "../../store/doctorStore";
const Session = () => {
  const navigate = useNavigate();
  const { session_id2 } = useParams();
  const particularSession = usePatientStore((state) => state.particularSession);
  const particularRecords = useDoctorStore((state) => state.particularRecords);
  console.log("doctorsession", particularRecords);
  const getRecordsBySessionId = useDoctorStore(
    (state) => state.getRecordsBySessionId
  );
  const getParticularSession = usePatientStore(
    (state) => state.getParticularSession
  );
  useEffect(() => {
    getParticularSession(session_id2);
    getRecordsBySessionId(session_id2);
    console.log(particularSession);
  }, []);

  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full'>
        {/* <ProgressBar /> */}
        <DetailedSession session_id={session_id2} />
        <div className='flex justify-between mb-3'>
          <h1 className='text-xl text-blue-500 font-semibold mb-3'>Records</h1>
          <Button
            colorScheme='blue'
            variant='outline'
            onClick={() =>
              navigate(
                "/doctor/create-record/" +
                  particularSession.patient_id._id +
                  "/" +
                  session_id2
              )
            }
          >
            Create New Record
          </Button>
        </div>
        <div>
          <AllRecords />
        </div>
      </div>
    </div>
  );
};

export default Session;
