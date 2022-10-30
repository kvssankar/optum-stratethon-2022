import { Tabs, TabList, Tab, TabPanels, TabPanel, Tag } from "@chakra-ui/react";
import PageLoader from "../../../components/Loader/PageLoader";

import React, { useEffect } from "react";
import { usePatientStore } from "../../../store/patientStore";

const ImmediateInfo = ({ session_id }) => {
  const getParticularSession = usePatientStore(
    (state) => state.getParticularSession
  );
  const particularSession = usePatientStore((state) => state.particularSession);
  const getRecordsBySessionId = usePatientStore(
    (state) => state.getRecordsBySessionId
  );
  const getDatewiseRecords = usePatientStore(
    (state) => state.getDatewiseRecords
  );
  useEffect(() => {
    console.log(particularSession);
    getParticularSession(session_id);
    getRecordsBySessionId(session_id);
    getDatewiseRecords(session_id);
  }, []);

  return particularSession ? (
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
            <TabList border="none">
              <Tab
                rounded={"full"}
                _selected={{ color: "white", bg: "blue.500" }}
              >
                Detail
              </Tab>
              <Tab
                rounded={"full"}
                _selected={{ color: "white", bg: "blue.500" }}
              >
                Prescription
              </Tab>
              <Tab
                rounded={"full"}
                _selected={{ color: "white", bg: "blue.500" }}
              >
                Tests
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="flex flex-col">
                  <div>
                    <b>Doctor Name -</b>
                    <p> {particularSession.doctor_id.name}</p>
                    <b>Doctor Specialization -</b>
                    <p>{particularSession.doctor_id.category}</p>
                    <b>Doctor Email -</b>
                    <p>{particularSession.doctor_id.email}</p>
                    <b>Description -</b>
                    <p> {particularSession.description}</p>
                    <b>Start Date -</b>
                    <p> {particularSession.started_at.date.substring(0, 10)}</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col">
                  <b>Condtion:-</b>
                  <p>{particularSession.Condition}</p>
                  <b>Medication:-</b>
                  <p>{particularSession.Medication}</p>
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
                    <p style={{ fontSize: "10px" }}>Report BloodTest</p>
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
  ) : (
    <PageLoader />
  );
};

export default ImmediateInfo;
