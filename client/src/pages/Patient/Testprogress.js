import React, { useState } from "react";
import Sidebar from "../../components/Patient/Sidebar";
import ProgressBar from "../../components/Patient/Session/ProgressBar";
import { Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
const Session = () => {
  const [ProgressNumber, setProgressNumber] = useState(0);
  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar />
      <div className="flex flex-col pt-5 pb-5 px-5 md:pl-0 w-full">
        <ProgressBar
          ProgressNumber={ProgressNumber}
          setProgressNumber={setProgressNumber}
        />
        <h1 className="text-xl text-blue-500 font-semibold mb-3">
          Test Details
        </h1>
        <div className="flex flex-col w-full md:w-full mb-6 border-2 border-blue-500 rounded-md px-3 py-2">
          <b>Started Date :- 12/12/2020</b>
          <b>Doctor Assigned :- Mr. Sriesh</b>
          <b>Test Assigned :- Radiology Test</b>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            voluptatibus quibusdam, accusantium impedit labore nulla voluptatem
            illum cupiditate blanditiis ipsam non voluptatum, officiis
            doloremque molestias, odit temporibus adipisci? Similique,
            consequuntur!
          </p>
        </div>
        <h1 className="text-xl text-blue-500 font-semibold mb-3">Records</h1>
        <div className="flex flex-wrap w-full md:w-full mb-6 border-2 border-blue-500 rounded-md px-3 py-2">
          {[
            { url: "/", name: "chestscan.png" },
            { url: "/", name: "chestscan.png" },
          ].map((file, idx) => (
            <Tag key={idx} className="px-2 py-1 m-4 w-fit" colorScheme="blue">
              <Link href={file.url}>
                <div className="w-full py-1 px-2 rounded-sm flex items-center justify-start">
                  <p className="pr-3 text-sm">{file.name}</p>
                  <AiOutlineDownload size={20} />
                </div>
              </Link>
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Session;
