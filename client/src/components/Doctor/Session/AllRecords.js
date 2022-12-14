import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Tag,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import moment from "moment";
import ComponentLoader from "../../Loader/ComponentLoader";
import { useDoctorStore } from "../../../store/doctorStore";
import exportFromJSON from "export-from-json";

const AllRecords = ({ session_id }) => {
  const [file, setFile] = useState(null);
  const addFileToRecord = useDoctorStore((state) => state.addFileToRecord);
  const datewiseRecords = useDoctorStore((state) => state.datewiseRecords);
  const download = (obj) => {
    const data = obj.map((item) => {
      return {
        Description: item.DESCRIPTION,
        Value: item.VALUE,
        Unit: item.UNITS,
      };
    });
    const filename = `${session_id}_${obj[0].DATE}`;
    const exportType = "xls";
    exportFromJSON({ data: data, fileName: filename, exportType });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    filename: "",
  });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { filename } = data;
  const navigate = useNavigate();

  const uploadFile = async (rid) => {
    const formData = new FormData();
    formData.append("file", file);
    await fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        await addFileToRecord(rid, filename, data.filelocation);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClick = async (e, rid) => {
    e.preventDefault();
    setLoading(true);
    await uploadFile(rid);
    setLoading(false);
    if (filename === "" || file === null) {
      alert("Please provide all details first");
      return;
    }
    onClose();
    navigate("/doctor");
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
                    <form className="form">
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalContent>
                          <ModalHeader>Add file</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Stack spacing={4}>
                              <FormControl>
                                <FormLabel>File name</FormLabel>
                                <Input
                                  type="text"
                                  name="filename"
                                  onChange={(e) => onChange(e)}
                                  required
                                />
                              </FormControl>
                              <FormControl>
                                <FormLabel>Upload File</FormLabel>
                                <Input
                                  type="file"
                                  onChange={(e) => setFile(e.target.files[0])}
                                />
                              </FormControl>
                              <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                  bg: "blue.500",
                                }}
                                type="submit"
                                onClick={(e) =>
                                  onClick(e, datewiseRecords[key][0]._id)
                                }
                              >
                                ADD {loading && <ComponentLoader pl={2} />}
                              </Button>
                            </Stack>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </form>

                    <Button
                      className="z-100"
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      type="submit"
                      onClick={onOpen}
                    >
                      Add File
                    </Button>
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
