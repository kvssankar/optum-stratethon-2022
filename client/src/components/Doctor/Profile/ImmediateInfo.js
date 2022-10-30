import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Button,
  Tag,
  TagLabel,
  Tooltip,
} from "@chakra-ui/react";
import { useDoctorStore } from "../../../store/doctorStore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { times } from "../../../constants/globalconstants";

const ImmediateInfo = () => {
  const doctor = useDoctorStore((state) => state.doctor);
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5">
      <div className="hidden md:flex flex-row md:flex-col w-full md:w-1/5 mb-6 bg-blue-500 rounded-md justify-center items-center text-white pt-5 pb-5">
        <img
          src="https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg"
          alt=""
          className="object-cover h-32 w-32 rounded-md bg-white"
        />
        <h1 className="font-semibold">{doctor.name}</h1>
        <p className="text-sm">{doctor.age}</p>
        <p className="text-sm"> {doctor.gender}</p>
      </div>

      <div className="flex md:hidden flex-row w-full mb-6 bg-blue-500 rounded-md justify-around  items-center text-white pt-5 pb-5">
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065730.png"
          alt=""
          className="object-cover h-32 w-32 rounded-md bg-white"
        />
        <div className="flex flex-col items-start">
          {" "}
          <h1 className="font-semibold">
            <span className="hidden sm:inline">Name : </span>
            {doctor.name}
          </h1>
          <p className="text-sm">
            <span className="hidden sm:inline">Age : </span>
            {doctor.age}
          </p>
          <p className="text-sm">
            {" "}
            <span className="hidden sm:inline">Gender : </span>
            {doctor.gender}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-4/5 mb-6 border-2 border-blue-500 rounded-md">
        <div className="flex justify-between w-full text-white bg-blue-500 py-1 px-2 ">
          <h1 className="font-semibold text-lg">Notifications</h1>
          <Tooltip label="12th October, 2021" placement="top-start">
            <Tag colorScheme={"teal"}>1</Tag>
          </Tooltip>
        </div>
        <h1 className="m-3">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Attention</AlertTitle>
            <AlertDescription>
              Patient_1 needs re hospitalization, please check the patient's
              profile{" "}
              <a
                className="underline"
                target={"_blank"}
                href={"/doctor/patient/" + "635cff1b8cd6723eda38dae9"}
              >
                here
              </a>
              .
            </AlertDescription>
          </Alert>
        </h1>
      </div>
    </div>
  );
};

export default ImmediateInfo;
