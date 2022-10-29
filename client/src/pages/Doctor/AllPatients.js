import React, { useState, useEffect } from "react";
import PatientsTable from "../../components/Doctor/Profile/PatientsTable";
import ImmediateInfo from "../../components/Doctor/Profile/ImmediateInfo";
import Sidebar from "../../components/Doctor/Sidebar";
import { useDoctorStore } from "../../store/doctorStore";

const AllPatients = () => {
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
    </div>
  );
};

export default AllPatients;
