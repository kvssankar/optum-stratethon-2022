import {
  Avatar,
  Button,
  Tag,
  TagLabel,
  TagRightIcon,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { useDoctorStore } from "../../../store/doctorStore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCalendarToday } from "react-icons/md";
import ComponentLoader from "../../Loader/ComponentLoader";
import { times } from "../../../constants/globalconstants";

const ImmediateInfo = () => {
  const doctor = useDoctorStore((state) => state.doctor);
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5">
      {/* 1 */}
      <div className="hidden md:flex flex-row md:flex-col w-full md:w-1/5 mb-6 bg-blue-500 rounded-md justify-center items-center text-white pt-5 pb-5">
        <img
<<<<<<< HEAD
          src="https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg"
          alt=""
          className="object-cover h-32 w-32 rounded-md bg-white"
=======
          src='https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065730.png'
          alt=''
          className='object-cover h-32 w-32 rounded-md bg-white'
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
        />
        <h1 className="font-semibold">{doctor.name}</h1>
        <p className="text-sm">{doctor.age}</p>
        <p className="text-sm"> {doctor.gender}</p>
      </div>

      {/* FOR MOBILE */}
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
          <h1 className="font-semibold text-lg">Next Patient</h1>
          <Tooltip label="12th October, 2021" placement="top-start">
            {doctorSessions[0] ? (
              <Tag colorScheme={"teal"}>
                {times[doctorSessions[0].started_at.time]}
              </Tag>
            ) : (
              <></>
            )}
          </Tooltip>
        </div>
<<<<<<< HEAD
        {doctorSessions[0] ? (
          <div className="flex flex-col md:flex-row gap-5 py-3 px-2">
            <div className="md:w-3/5">
              <Tag size="lg" colorScheme="blue" borderRadius="full">
                <Avatar
                  src="https://miro.medium.com/fit/c/176/176/1*Me-NpG_iqTztbbHYrCYBVw.jpeg"
                  size="xs"
                  name="Dr Prasad"
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{doctorSessions[0].patient_id.name}</TagLabel>
              </Tag>
              <p>{doctorSessions[0].description}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 md:w-2/5">
              <Button colorScheme="blue" w="full">
                Records
              </Button>
              <Button colorScheme="teal" w="full">
                Lab Tests
              </Button>
              <Button
                onClick={() => navigate("/doctor/create-record")}
                colorScheme="red"
                w="full"
              >
                Add Record
              </Button>
              <Button colorScheme="green" w="full">
                Add Lab Test
              </Button>
            </div>
=======
        <div className='flex flex-col md:flex-row gap-5 py-3 px-2'>
          <div className='md:w-3/5'>
            <Tag size='lg' colorScheme='blue' borderRadius='full'>
              <Avatar
                src='https://bit.ly/sage-adebayo'
                size='xs'
                name='Dr Prasad'
                ml={-1}
                mr={2}
              />
              <TagLabel>Micheal Murthy</TagLabel>
            </Tag>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
          </div>
        ) : (
          <h1 className="m-3">No sessions</h1>
        )}
      </div>
    </div>
  );
};

export default ImmediateInfo;
