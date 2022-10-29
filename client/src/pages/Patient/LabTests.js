import React from "react";
import LabTestsTable from "../../components/Patient/LabTests/LabTestsTable";
import ImmediateInfo from "../../components/Patient/Profile/ImmediateInfo";
import Sidebar from "../../components/Patient/Sidebar";

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full'>
        <h1 className='text-xl text-blue-500 font-semibold mb-3'>Lab Tests</h1>
        <div className=''>
          <LabTestsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
