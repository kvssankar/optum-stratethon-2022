import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
  Tooltip,
} from "@chakra-ui/react";

import React, { useState } from "react";

<<<<<<< HEAD
const ImmediateInfo = (session_id) => {
  const getParticularSession = usePatientStore(
    (state) => state.getParticularSession
  );
  const particularSession = usePatientStore((state) => state.particularSession);

  useEffect(() => {
    getParticularSession(session_id.session_id);
  }, []);

  return particularSession ? (
=======
const ImmediateInfo = () => {
  return (
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
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
                <div className='flex'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electroni
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
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
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ImmediateInfo;
