import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
  Tooltip,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { usePatientStore } from "../../../store/patientStore";

const ImmediateInfo = (session_id) => {
  const getParticularSession = usePatientStore(
    (state) => state.getParticularSession
  );
  const particularSession = usePatientStore((state) => state.particularSession);

  useEffect(() => {
    getParticularSession(session_id);
    console.log(particularSession[0], "here yay");
  }, []);

  return (
    <div className='flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5'>
      <div className='flex flex-col w-full md:w-full mb-6 border-2 border-blue-500 rounded-md'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-full text-white bg-blue-500 py-1 px-2 '>
          <div className='flex items-center pb-2 md:pb-0 '>
            <h1 className='font-semibold text-lg pr-5 '>Session</h1>
            <Tag colorScheme={"teal"}>July 14 </Tag>
          </div>

          {/* <Tooltip label='12th October, 2021' placement='top-start'>
              <Tag colorScheme={"teal"}>In Progress</Tag>
            </Tooltip> */}
        </div>
        <div className=' gap-5  py-3 px-2'>
          <Tabs
            className='flex'
            colorScheme='green'
            variant='enclosed'
            isFitted
          >
            <TabList mb='1em'>
              <Tab>Detail</Tab>
              <Tab>Prescription</Tab>
              <Tab>Tests</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className='flex flex-col'>
                  {particularSession[0].doctor_id && (
                    <div>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Patient Name -
                        </span>{" "}
                        {particularSession[0].patient_id.name}
                      </p>
                      <p>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Patient Age -
                        </span>{" "}
                        {particularSession[0].patient_id.age}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Patient Email -
                        </span>{" "}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Patient Address
                        </span>{" "}
                        {particularSession[0].patient_id.address}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Chronic Diseases -
                        </span>{" "}
                        Blood Pressue, Diabetes, Sugar
                      </p>
                      <hr></hr>
                      <br></br>
                      <hr></hr>
                    </div>
                  )}
                  {particularSession[0] && (
                    <div>
                      <p>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Description -
                        </span>{" "}
                        {particularSession[0].description}
                      </p>
                      <p>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Disease -
                        </span>{" "}
                        {particularSession[0].disease}
                      </p>
                      {particularSession[0].started_at && (
                        <div>
                          {" "}
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              Start Date -
                            </span>{" "}
                            {particularSession[0].started_at.substring(0, 10)}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                  <div className='pdf mr-10'>
                    <img src='/pdficon.png' width='100px'></img>
                    <sm style={{ fontSize: "10px" }}>Prescription 20/9/2022</sm>
                  </div>
                  <div className='pdf mr-10'>
                    <img src='/pdficon.png' width='100px'></img>
                    <sm style={{ fontSize: "10px" }}>Prescription 10/9/2022</sm>
                  </div>
                  {/* <div>
                    <Document
                      file='./sample.pdf'
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                      Page {pageNumber} of {numPages}
                    </p>
                  </div> */}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                  <div className='pdf mr-10 '>
                    <img src='/pdficon.png' width='100px'></img>
                    <sm style={{ fontSize: "10px" }}>Report MRI</sm>
                  </div>
                  <div className='pdf mr-10'>
                    <img src='/pdficon.png' width='100px'></img>
                    <sm style={{ fontSize: "10px" }}>Report X-Ray Chest</sm>
                  </div>
                  <div className='pdf mr-10'>
                    <img src='/pdficon.png' width='100px'></img>
                    <sm style={{ fontSize: "10px" }}>Report X-Ray Hand</sm>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ImmediateInfo;
