import React from "react";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import DetailedSession from "../../components/Patient/Session/DetailedSession";
import Sidebar from "../../components/Patient/Sidebar";
import ProgressBar from "../../components/Patient/Session/ProgressBar";
const Session = () => {
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full'>
        <ProgressBar />
        <DetailedSession />
        <div className=''></div>
      </div>
    </div>
  );
};

export default Session;