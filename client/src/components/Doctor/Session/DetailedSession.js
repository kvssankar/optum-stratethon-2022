import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { usePatientStore } from "../../../store/patientStore";
import ComponentLoader from "../../Loader/ComponentLoader";
const ImmediateInfo = (session_id) => {
  const particularSession = usePatientStore((state) => state.particularSession);

  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row  gap-x-5 w-full mt-5 mb-5">
      <div className="flex flex-col w-full md:w-full mb-6 border-2 border-blue-500 rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full text-white bg-blue-500 py-1 px-2 ">
          <div className="flex items-center pb-2 md:pb-0 ">
            <h1 className="font-semibold text-lg pr-5 ">Session</h1>
            <Tag colorScheme={"teal"}>July 14 </Tag>
          </div>

          {/* <Tooltip label='12th October, 2021' placement='top-start'>
              <Tag colorScheme={"teal"}>In Progress</Tag>
            </Tooltip> */}
        </div>
        <div className=" gap-5  py-3 px-2">
          <Tabs
            className="flex"
            colorScheme="green"
            variant="enclosed"
            isFitted
          >
            <TabList mb="1em">
              <Tab>Detail</Tab>
              <Tab>Prescription</Tab>
              <Tab>Tests</Tab>
            </TabList>
            <TabPanels>
              {particularSession ? (
                <TabPanel>
                  <div className="grid md:grid-cols-2 justify-between items-start">
                    <div className="border-r-0 md:border-r-2 flex flex-col">
                      <div>
                        <p>
                          <span style={{ fontWeight: "bold" }}>
                            Patient Name -
                          </span>{" "}
                          {particularSession.patient_id.name}
                        </p>
                      </div>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Recent Visit</span>{" "}
                        {moment(particularSession.started_at.date).calendar()}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Recent Visit</span>{" "}
                        {moment(particularSession.started_at.date).calendar()}
                      </p>
                    </div>
                    <div className="md:pl-5">
                      <hr className="md:hidden w-full mt-2 mb-2"></hr>{" "}
                      <p>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Description -
                        </span>{" "}
                        {particularSession.description}
                      </p>
                    </div>
                  </div>
                </TabPanel>
              ) : (
                <ComponentLoader />
              )}
              <TabPanel>
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <div className="pdf mr-10">
                    <img src="/pdficon.png" width="100px"></img>
                    <p style={{ fontSize: "10px" }}>Prescription 20/9/2022</p>
                  </div>
                  <div className="pdf mr-10">
                    <img src="/pdficon.png" width="100px"></img>
                    <p style={{ fontSize: "10px" }}>Prescription 10/9/2022</p>
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
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <div className="pdf mr-10 ">
                    <img src="/pdficon.png" width="100px"></img>
                    <p style={{ fontSize: "10px" }}>Report MRI</p>
                  </div>
                  <div className="pdf mr-10">
                    <img src="/pdficon.png" width="100px"></img>
                    <p style={{ fontSize: "10px" }}>Report X-Ray Chest</p>
                  </div>
                  <div className="pdf mr-10">
                    <img src="/pdficon.png" width="100px"></img>
                    <p style={{ fontSize: "10px" }}>Report X-Ray Hand</p>
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
