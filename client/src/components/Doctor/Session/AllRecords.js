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
  ModalOverlay,
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

const AllRecords = (session_id) => {
  const [file, setFile] = useState(null);
  const addFileToRecord = useDoctorStore((state) => state.addFileToRecord);
  const particularRecords = useDoctorStore((state) => state.particularRecords);
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
    onClose();
    navigate("/doctor");
  };

  return particularRecords ? (
    <Accordion defaultIndex={[0]} allowMultiple>
      {particularRecords.map((record) => (
        <AccordionItem border="1px">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Date : {moment(record.created_at).calendar()}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="rounded-sm"
            bgGradient="linear(to-b, rgb(186, 197, 226,0.50), pink.50)"
            pb={4}
          >
            <div className="flex flex-col ">
              <div className="pb-5">
                <p>Description : {record.description}</p>
              </div>
              <hr></hr>
              <div className="pt-2">
                <div className="  py-1 rounded-sm  flex items-center justify-between mb-3">
                  <h1 className="text-md text-blue-500 font-semibold">Files</h1>
                  <hr></hr>
                  <form className="form">
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Add file</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Stack spacing={4}>
                            <FormControl>
                              <FormLabel>File name</FormLabel>
                              <Input
                                type="text"
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
                          </Stack>
                          <Button
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                            type="submit"
                            onClick={(e) => onClick(e, record._id)}
                          >
                            ADD {loading && <ComponentLoader pl={2} />}
                          </Button>

                          {/* <Button colorScheme='blue' ml={3} onClick={onClose}>
                              Close
                            </Button> */}
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
              <hr></hr>
              <div className="pt-2">
                {record.files.map((file) => (
                  <Tag border="1px" className=" p-2 m-4" colorScheme="blue">
                    <Link href={file.url}>
                      <div className="  w-full py-1 px-2  rounded-sm  flex items-center justify-start ">
                        <p className="pr-3 uppercase">{file.name}....</p>{" "}
                        <AiOutlineDownload size={20} />
                      </div>
                    </Link>
                  </Tag>
                ))}
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
