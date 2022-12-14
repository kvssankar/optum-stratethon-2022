import React from "react";
import DetailedSession from "../../components/Patient/Session/DetailedSession";
import Sidebar from "../../components/Patient/Sidebar";
import { useParams } from "react-router-dom";
import AllRecords from "../../components/Patient/Session/AllRecords";
const Session = () => {
  const { session_id } = useParams();
  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
        <DetailedSession session_id={session_id} />
        <AllRecords session_id={session_id} />
      </div>
    </div>
  );
};

export default Session;
