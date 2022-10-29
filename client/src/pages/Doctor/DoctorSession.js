import React from "react";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import DetailedSession from "../../components/Doctor/Session/DetailedSession";
import Sidebar from "../../components/Doctor/Sidebar";
import ProgressBar from "../../components/Patient/Session/ProgressBar";
import { useParams } from "react-router-dom";
const Session = () => {
  const { session_id2 } = useParams();
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full'>
        {/* <ProgressBar /> */}
        <DetailedSession session_id={session_id2} />
        <div className=''></div>
      </div>
    </div>
  );
};

export default Session;
