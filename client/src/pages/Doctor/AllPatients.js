import React, { useEffect } from "react";
import PatientsTable from "../../components/Doctor/Profile/PatientsTable";
import Sidebar from "../../components/Doctor/Sidebar";
import PageLoader from "../../components/Loader/PageLoader";
import { useDoctorStore } from "../../store/doctorStore";

const AllPatients = () => {
  const doctor = useDoctorStore((state) => state.doctor);
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);
  const getDoctorSessions = useDoctorStore((state) => state.getDoctorSessions);
  function getDoctorSessionsFunction() {
    getDoctorSessions(doctor._id);
  }
  useEffect(() => {
    if (doctor) getDoctorSessionsFunction(doctor._id);
  }, [doctor]);

  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      {doctor && doctorSessions ? (
        <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
          <h1 className="text-xl text-blue-500 font-semibold mb-3">
            Active Appointments
          </h1>
          <div className="mb-3">
            <PatientsTable flag={0} />
          </div>
          <h1 className="text-xl text-blue-500 font-semibold mb-3">History</h1>
          <div className="">
            <PatientsTable flag={1} />
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default AllPatients;
