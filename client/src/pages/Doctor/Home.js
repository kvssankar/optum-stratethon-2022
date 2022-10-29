import React from "react";
import PatientsTable from "../../components/Doctor/Profile/PatientsTable";
import ImmediateInfo from "../../components/Doctor/Profile/ImmediateInfo";
import Sidebar from "../../components/Doctor/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
        <div className="">
          <h1 className="font-bold text-blue-500 text-lg">Welcome Sankar</h1>
          <p className="text-sm">How are you doing ?</p>
        </div>
        <ImmediateInfo />
        <h1 className="text-xl text-blue-500 font-semibold mb-3">
          Today's Appointments
        </h1>
        <div className="">
          <PatientsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
