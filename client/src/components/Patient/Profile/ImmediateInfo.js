import { Avatar, Tag, TagLabel, TagRightIcon, Tooltip } from "@chakra-ui/react";
import React from "react";
import { MdCalendarToday } from "react-icons/md";

const ImmediateInfo = () => {
  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5">
      {/* 1 */}
      <div className="hidden md:flex flex-row md:flex-col w-full md:w-1/5 mb-6 bg-blue-500 rounded-md justify-center items-center text-white pt-5 pb-5">
        <img
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065730.png"
          alt=""
          className="object-cover h-32 w-32 rounded-md bg-white"
        />
        <h1 className="font-semibold">Sankar Kumar</h1>
        <p className="text-sm">23</p>
        <p className="text-sm"> Male</p>
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
            <span className="hidden sm:inline">Name : </span>Sankar Kumar
          </h1>
          <p className="text-sm">
            <span className="hidden sm:inline">Age : </span>23
          </p>
          <p className="text-sm">
            {" "}
            <span className="hidden sm:inline">Gender : </span>Male
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col w-full md:w-2/5 mb-6 border-2 border-blue-500 rounded-md">
        <h1 className="font-semibold text-white bg-blue-500 text-lg border-b-2 border-blue-500 p-1 px-2">
          Chronic Disease History
        </h1>
        <div className="flex flex-wrap gap-5 py-1 px-2 my-3">
          <Tag>Sample Tag</Tag>
          <Tag>Sample Tag</Tag>
          <Tag>Sample Tag</Tag>
          <Tag>Sample Tag</Tag>
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col w-full md:w-2/5 mb-6 border-2 border-blue-500 rounded-md">
        <div className="flex justify-between w-full text-white bg-blue-500 py-1 px-2 ">
          <h1 className="font-semibold text-lg">Session</h1>
          <Tooltip label="12th October, 2021" placement="top-start">
            <Tag colorScheme={"teal"}>In Progress</Tag>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-5 py-3 px-2">
          <Tag size="lg" colorScheme="blue" borderRadius="full">
            <Avatar
              src="https://bit.ly/sage-adebayo"
              size="xs"
              name="Dr Prasad"
              ml={-1}
              mr={2}
            />
            <TagLabel>Dr Prasad</TagLabel>
          </Tag>
          <Tag variant="outline" colorScheme="blue">
            <TagLabel>Next Appointment on 2nd October, 2022</TagLabel>
            <TagRightIcon as={MdCalendarToday} />
          </Tag>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmediateInfo;
