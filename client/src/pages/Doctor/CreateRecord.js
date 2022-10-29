import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Doctor/Sidebar";
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
import moment from "moment";
import { usePatientStore } from "../../store/patientStore";
<<<<<<< HEAD
import { useDoctorStore } from "../../store/doctorStore";
import { useNavigate, useParams } from "react-router-dom";
import ComponentLoader from "../../components/Loader/ComponentLoader";

const CreateRecord = () => {
  const navigate = useNavigate();
  //GETTING FROM STORE
  const createSession = usePatientStore((state) => state.createSession);
  const createRecord = useDoctorStore((state) => state.createRecord);
  const doctor = useDoctorStore((state) => state.doctor);
  const patient = useDoctorStore((state) => state.patient);
  const getPatient = useDoctorStore((state) => state.getPatient);
=======
import { useNavigate } from "react-router-dom";
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15

  const [formData, setformData] = useState({
    disease: "",
    description: "",
    category: "",
    time: "",
    date: "",
    filename: "",
    filelocation: "",
  });

  const { pid, sid } = useParams();

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    uploadFile();
    await createRecord(
      pid,
      sid,
      formData["description"],
      formData["filename"],
      formData["filelocation"],
      doctor._id
    );
    navigate("/doctor/session/" + sid);
  };

  const uploadFile = () => {
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setformData({
          ...formData,
          filename: data.filename,
          filelocation: data.filelocation,
        });
      })
      .catch((err) => console.log(err));
  };

=======
  };
  const createSession = usePatientStore((state) => state.createSession);
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
  const { disease, description, date, time, category, filename } = formData;
  useEffect(() => {
    if (pid) getPatient(pid);
  }, [pid]);

  return (
    <div className='flex flex-col md:flex-row mx-5 '>
      <Sidebar />
<<<<<<< HEAD
      {patient ? (
        <div className='flex justify-center items-center w-full'>
          <Box rounded={"lg"} p={8} className='w-4/5'>
            <h1 className='text-2xl text-blue-500 font-semibold mb-3 border-b-2 border-blue-500'>
              {patient.name}'s record for{" "}
              {moment(new Date()).format("DD-MM-YYYY")}
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
                    type='text'
                    name='filename'
                    value={filename}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>File Url</FormLabel>
                  <Input type='file' id='file' />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type='submit'
                    // onClick={async () => {
                    //   uploadFile();
                    //   //navigate("/patient");
                    // }}
                  >
                    CREATE
                  </Button>
                </Stack>
=======
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
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
              </Stack>
            </form>
          </Box>
        </div>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default CreateRecord;
