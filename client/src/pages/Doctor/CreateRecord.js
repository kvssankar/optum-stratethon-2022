import React, { useState } from "react";
import Sidebar from "../../components/Patient/Sidebar";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Select,
} from "@chakra-ui/react";
import {
  diseases,
  doctor_categories,
  times,
} from "../../constants/globalconstants";
import { usePatientStore } from "../../store/patientStore";
import { useNavigate } from "react-router-dom";

const CreateSession = () => {
  const [formData, setformData] = useState({
    disease: "",
    description: "",
    category: "",
    time: "",
    date: "",
    filename: "",
  });

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  const createSession = usePatientStore((state) => state.createSession);
  const { disease, description, date, time, category, filename } = formData;
  const navigate = useNavigate();
  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
      <div className='flex justify-center items-center w-full'>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          p={8}
          className='w-4/5'
        >
          <h1 className='text-2xl text-blue-500 font-semibold mb-3 border-b-2 border-blue-500'>
            Create a record for __PATIENTNAME__
          </h1>
          <form
            className='form'
            action='create-profile.html'
            onSubmit={(e) => onSubmit(e)}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Prescription Content</FormLabel>
                <Textarea
                  type='text'
                  placeholder='What was your evaluation and description of patient condition'
                  name='description'
                  value={description}
                  onChange={(e) => onChange(e)}
                  required
                />
              </FormControl>
              <Text color='gray'>Please add any files if nessesary</Text>
              <FormControl>
                <FormLabel>File name</FormLabel>
                <Input
                  type='string'
                  value={filename}
                  onChange={(e) => {
                    setformData({ ...formData, date: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Upload File</FormLabel>
                <Input
                  type='file'
                  value={filename}
                  onChange={(e) => {
                    setformData({ ...formData, date: e.target.value });
                  }}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                  onClick={async () => {
                    await createSession(
                      description,
                      disease,
                      category,
                      date,
                      time
                    );
                    //navigate("/patient");
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

export default CreateSession;
