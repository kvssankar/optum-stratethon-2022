import React, { useState } from "react";
import Sidebar from "../../components/Patient/Sidebar";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { usePatientStore } from "../../store/patientStore";
import { useNavigate } from "react-router-dom";

const PerformLabTest = () => {
  const performLabTest = usePatientStore((state) => state.performLabTest);
  const patient = usePatientStore((state) => state.patient);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    fileUrl: "",
  });

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  const { name, fileUrl } = formData;

  return (
    <div className="flex flex-col md:flex-row mx-5 ">
      <Sidebar />
      <div className="flex justify-center items-center w-full">
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          p={8}
          className="w-4/5"
        >
          <h1 className="text-2xl text-blue-500 font-semibold mb-3 border-b-2 border-blue-500">
            Enter Nessesary Details
          </h1>
          <form
            className="form"
            action="create-profile.html"
            onSubmit={(e) => onSubmit(e)}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name Of Test</FormLabel>
                <Input
                  type="string"
                  placeholder="Enter test name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>File Url</FormLabel>
                <Input
                  type="string"
                  name="fileUrl"
                  value={fileUrl}
                  placeholder="Enter file url of Scan"
                  onChange={(e) => onChange(e)}
                />
              </FormControl>

              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  onClick={async () => {
                    await performLabTest(patient._id, name, fileUrl);
                    navigate("/labTests");
                  }}
                >
                  CREATE
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default PerformLabTest;
