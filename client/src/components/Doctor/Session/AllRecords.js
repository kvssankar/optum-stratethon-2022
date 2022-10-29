import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import moment from "moment";
import ComponentLoader from "../../Loader/ComponentLoader";
import { useDoctorStore } from "../../../store/doctorStore";
const AllRecords = () => {
  const particularRecords = useDoctorStore((state) => state.particularRecords);
  console.log(particularRecords);
  return particularRecords ? (
    <Accordion defaultIndex={[0]} allowMultiple>
      {particularRecords.map((record) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Date : {moment(record.created_at).calendar()}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className='flex flex-col '>
              <div className='pb-5'>
                <p>Description : {record.description}</p>
              </div>
              <hr></hr>
              <div className='pt-5'>
                <div className='  py-1 rounded-sm  flex items-center justify-between mb-3'>
                  <h1 className='text-md text-blue-500 font-semibold'>Files</h1>
                  <hr></hr>

                  <Button
                    className='z-100'
                    size='sm'
                    colorScheme='blue'
                    variant='outline'
                  >
                    Add File
                  </Button>
                </div>
              </div>
              <hr></hr>
              <div className='pt-5'>
                <div className='  w-full py-1 px-2  rounded-sm  flex items-center justify-start mb-3'>
                  <Tag className='p-2 m-4' colorScheme='blue'>
                    <p className='pr-3 uppercase'>record.filename....</p>{" "}
                    <AiOutlineDownload size={20} />
                  </Tag>
                  <Tag className='p-2' colorScheme='blue'>
                    <p className='pr-3 uppercase'>record.filename....</p>{" "}
                    <AiOutlineDownload size={20} />
                  </Tag>
                </div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <ComponentLoader />
  );
};

export default AllRecords;
