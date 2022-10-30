import React, { useEffect, useState } from "react";
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
  Alert,
  AlertIcon,
  Spinner,
  AlertTitle,
  AlertDescription,
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
  const patient = usePatientStore((state) => state.patient);
  const createSession = usePatientStore((state) => state.createSession);
  const getEstimatedPrice = usePatientStore((state) => state.getEstimatedPrice);
  const estimatedPrice = usePatientStore((state) => state.estimatedPrice);
  const { disease, description, date, time, category } = formData;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(0);
  const showEstimate = async () => {
    setLoading(1);
    await setTimeout(() => {
      setLoading(2);
      setTimeout(() => {
        setLoading(3);
        setTimeout(() => {
          getEstimatedPrice(
            patient._id,
            formData.description,
            formData.disease
          );
        }, 2000);
      }, 2000);
    }, 2000);
  };
  useEffect(() => {
    if (
      formData.disease.length &&
      formData.category.length &&
      formData.description.length
    ) {
      showEstimate();
    } else {
      setLoading(0);
    }
  }, [formData]);
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
                {loading !== 0 && (
                  <Alert
                    status="success"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    minHeight="200px"
                  >
                    {loading !== 4 && <Spinner boxSize="40px" mr={0} />}
                    {loading === 4 && <AlertIcon boxSize="40px" mr={0} />}
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      {loading === 1 && " Fetching your medical history..."}
                      {loading === 2 && " Checking your current condition..."}
                      {loading === 3 && " Checking your current condition..."}
                      {loading === 4 &&
                        " Estimates given below are approxiamate based on the data we have!!"}
                    </AlertTitle>
                    {loading === 4 && (
                      <AlertDescription maxWidth="sm">
                        Consultaion Fee : {estimatedPrice.consultaion_fee}
                        <br />
                        Medicine Cost : {estimatedPrice.medicine_cost}
                        <br />
                        Procedures Costs : {estimatedPrice.procedures_cost}
                        <br />
                        Total :{" "}
                        {estimatedPrice.consultaion_fee +
                          estimatedPrice.medicine_cost +
                          estimatedPrice.procedures_cost}
                        <br />
                        {/* below one is analytical stuff for future scope */}
                        {/* <p className="text-sm font-semibold">
                          On an average diabetic patients visit the hospital 10
                          times a year, hence the annual cost is 8610
                        </p> */}
                      </AlertDescription>
                    )}
                  </Alert>
                )}
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
