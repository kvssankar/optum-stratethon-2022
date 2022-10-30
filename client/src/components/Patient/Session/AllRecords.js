import React, { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import ComponentLoader from "../../Loader/ComponentLoader";
import { usePatientStore } from "../../../store/patientStore";
import exportFromJSON from "export-from-json";

const AllRecords = ({ session_id }) => {
  const datewiseRecords = usePatientStore((state) => state.datewiseRecords);
  const patient = usePatientStore((state) => state.patient);
  const download = (obj) => {
    const data = obj.map((item) => {
      return {
        Description: item.DESCRIPTION,
        Value: item.VALUE,
        Unit: item.UNITS,
      };
    });
    const filename = `${patient.name}_${session_id}_${obj[0].DATE}`;
    const exportType = "xls";
    exportFromJSON({ data: data, fileName: filename, exportType });
  };

  return datewiseRecords ? (
    <Accordion defaultIndex={[0]} allowMultiple>
      {datewiseRecords &&
        Object.keys(datewiseRecords).map((key, idx) => (
          <AccordionItem
            border={"none"}
            boxShadow="base"
            borderRadius={5}
            mb="3"
            key={idx}
          >
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Record on {datewiseRecords[key][0].DATE}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="rounded-sm" bg={"gray.100"} pb={4}>
              <div className="flex flex-col ">
                {/* <div className="pb-3">
                <p>{record.description}</p>
              </div> */}
                <div>
                  <div className="py-1 rounded-sm  flex items-center justify-between">
                    <h1 className="text-md text-blue-500 font-semibold">
                      Files
                    </h1>
                  </div>
                </div>
                <div>
                  <Tag key={idx} className="px-2 py-1 m-4" colorScheme="blue">
                    <div
                      className="w-full py-1 px-2 rounded-sm flex items-center justify-start cursor-pointer"
                      onClick={() => download(datewiseRecords[key])}
                    >
                      <p className="pr-3 text-sm">Data</p>
                      <AiOutlineDownload size={20} />
                    </div>
                  </Tag>
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
