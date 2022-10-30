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
  });

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  const createSession = usePatientStore((state) => state.createSession);
  const { disease, description, date, time, category } = formData;
  const navigate = useNavigate();
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
            Book Appointment
          </h1>
          <form
            className="form"
            action="create-profile.html"
            onSubmit={(e) => onSubmit(e)}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Brief Your Symptoms</FormLabel>
                <Textarea
                  type="text"
                  placeholder="Feeling feverish and cold"
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Disease</FormLabel>
                <Select
                  placeholder="Select Disease"
                  onChange={(e) => {
                    setformData({ ...formData, disease: e.target.value });
                  }}
                >
                  {Object.keys(diseases).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select the category"
                  onChange={(e) => {
                    setformData({ ...formData, category: e.target.value });
                  }}
                >
                  {doctor_categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setformData({ ...formData, date: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Time</FormLabel>
                <Select
                  placeholder="Select the time"
                  onChange={(e) => {
                    setformData({ ...formData, time: e.target.value });
                  }}
                >
                  {Object.keys(times).map((time) => (
                    <option key={time} value={time}>
                      {times[time]}
                    </option>
                  ))}
                </Select>
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
                    if (
                      !disease ||
                      !description ||
                      !date ||
                      !time ||
                      !category
                    ) {
                      alert(
                        time +
                          " " +
                          date +
                          " " +
                          category +
                          " " +
                          disease +
                          " " +
                          description
                      );
                      return;
                    }
                    await createSession(
                      description,
                      disease,
                      category,
                      date,
                      time
                    );
                    navigate("/patient");
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
