import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AllSessionTable from "../../components/Patient/Profile/AllSessionTable";
import ImmediateInfo from "../../components/Patient/Profile/ImmediateInfo";
import Sidebar from "../../components/Patient/Sidebar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      <div className="flex flex-col pt-5 pb-5 pr-0 md:pr-5 w-full">
        <div className="">
          <h1 className="font-bold text-blue-500 text-lg">Welcome Sankar</h1>
          <p className="text-sm">How are you doing ?</p>
        </div>
        <ImmediateInfo />
        <div className="flex justify-between mb-3">
          <h1 className="text-xl text-blue-500 font-semibold mb-3">Sessions</h1>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => navigate("/patient/create-session")}
          >
            Create New Session
          </Button>
        </div>
        <div className="">
          <AllSessionTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
