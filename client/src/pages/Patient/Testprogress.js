import React, { useState } from "react";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import DetailedSession from "../../components/Patient/Session/DetailedSession";
import Sidebar from "../../components/Patient/Sidebar";
import ProgressBar from "../../components/Patient/Session/ProgressBar";
const Session = () => {
  const [ProgressNumber, setProgressNumber] = useState(0);
  return (
    <div className='flex flex-col md:flex-row '>
      <Sidebar />
      <ProgressBar
        ProgressNumber={ProgressNumber}
        setProgressNumber={setProgressNumber}
      />
    </div>
  );
};

export default Session;