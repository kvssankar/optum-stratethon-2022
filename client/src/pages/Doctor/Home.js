import React, { useEffect } from "react";
import PatientsTable from "../../components/Doctor/Profile/PatientsTable";
import ImmediateInfo from "../../components/Doctor/Profile/ImmediateInfo";
import Sidebar from "../../components/Doctor/Sidebar";
import { useDoctorStore } from "../../store/doctorStore";
import PageLoader from "../../components/Loader/PageLoader";

const Home = () => {
  const doctor = useDoctorStore((state) => state.doctor);
  const logout = useDoctorStore((state) => state.logout);
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);
  const getTodaysDoctorSessions = useDoctorStore(
    (state) => state.getTodaysDoctorSessions
  );
  function getDoctorSessionsFunction() {
    getTodaysDoctorSessions(doctor._id);
  }
  useEffect(() => {
    if (doctor) getDoctorSessionsFunction(doctor._id);
  }, [doctor]);

  const onSubmit = async (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      {doctor && doctorSessions ? (
        <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-blue-500 text-lg">
              Welcome {doctor.name}
            </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <button type="submit" className="font-bold text-blue-500 text-lg">
                Logout
              </button>
            </form>
          </div>
          <p className="text-sm">Ready for the day !!</p>
          <ImmediateInfo />
          <h1 className="text-xl text-blue-500 font-semibold mb-3">
            Today's Appointments
          </h1>
          <div className="">
            <PatientsTable />
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default Home;
