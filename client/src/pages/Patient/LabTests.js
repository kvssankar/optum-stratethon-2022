import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LabTestsTable from "../../components/Patient/LabTests/LabTestsTable";
import ImmediateInfo from "../../components/Patient/Profile/ImmediateInfo";
import Sidebar from "../../components/Patient/Sidebar";

const LabTests = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full'>
        <div className='flex justify-between mb-3'>
          <h1 className='text-xl text-blue-500 font-semibold mb-3'>
            Lab Tests
          </h1>
          <Button
            colorScheme='blue'
            variant='outline'
            onClick={() => navigate("/patient/perform-labtest")}
          >
            Perform new test
          </Button>
        </div>
        <div className=''>
          <LabTestsTable />
        </div>
      </div>
    </div>
  );
};

export default LabTests;
