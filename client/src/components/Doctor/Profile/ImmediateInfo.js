import {
  Avatar,
  Button,
  Tag,
  TagLabel,
  TagRightIcon,
  Link,
  Tooltip,
} from "@chakra-ui/react";

import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCalendarToday } from "react-icons/md";

const ImmediateInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5'>
      {/* 1 */}
      <div className='hidden md:flex flex-row md:flex-col w-full md:w-1/5 mb-6 bg-blue-500 rounded-md justify-center items-center text-white pt-5 pb-5'>
        <img
          src='https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg'
          alt=''
          className='object-cover h-32 w-32 rounded-md bg-white'
        />
        <h1 className='font-semibold'>Sankar Kumar</h1>
        <p className='text-sm'>23</p>
        <p className='text-sm'> Male</p>
      </div>

      {/* FOR MOBILE */}
      <div className='flex md:hidden flex-row w-full mb-6 bg-blue-500 rounded-md justify-around  items-center text-white pt-5 pb-5'>
        <img
          src='https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065730.png'
          alt=''
          className='object-cover h-32 w-32 rounded-md bg-white'
        />
        <div className='flex flex-col items-start'>
          {" "}
          <h1 className='font-semibold'>
            <span className='hidden sm:inline'>Name : </span>Sankar Kumar
          </h1>
          <p className='text-sm'>
            <span className='hidden sm:inline'>Age : </span>23
          </p>
          <p className='text-sm'>
            {" "}
            <span className='hidden sm:inline'>Gender : </span>Male
          </p>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-4/5 mb-6 border-2 border-blue-500 rounded-md'>
        <div className='flex justify-between w-full text-white bg-blue-500 py-1 px-2 '>
          <h1 className='font-semibold text-lg'>Next Patient</h1>
          <Tooltip label='12th October, 2021' placement='top-start'>
            <Tag colorScheme={"teal"}>12:00 AM - 1:00 AM</Tag>
          </Tooltip>
        </div>
        <div className='flex flex-col md:flex-row gap-5 py-3 px-2'>
          <div className='md:w-3/5'>
            <Tag size='lg' colorScheme='blue' borderRadius='full'>
              <Avatar
                src='https://miro.medium.com/fit/c/176/176/1*Me-NpG_iqTztbbHYrCYBVw.jpeg'
                size='xs'
                name='Dr Prasad'
                ml={-1}
                mr={2}
              />
              <TagLabel>Sriesh Agrawal</TagLabel>
            </Tag>
            <p>
              Severe eye pain, maybe due to the ongoing diabetes and increase in
              blood sugar levels. White film formation over eyelid/cornea
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2 md:w-2/5'>
            <Button colorScheme='blue' w='full'>
              Records
            </Button>
            <Button colorScheme='teal' w='full'>
              Lab Tests
            </Button>
            <Button
              onClick={() => navigate("/doctor/create-record")}
              colorScheme='red'
              w='full'
            >
              Add Record
            </Button>
            <Button colorScheme='green' w='full'>
              Add Lab Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmediateInfo;
