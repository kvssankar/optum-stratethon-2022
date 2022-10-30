import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Doctor/Sidebar";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Textarea,
} from "@chakra-ui/react";

import moment from "moment";
import { useDoctorStore } from "../../store/doctorStore";
import { useNavigate, useParams } from "react-router-dom";
import ComponentLoader from "../../components/Loader/ComponentLoader";

const CreateRecord = () => {
  const navigate = useNavigate();
  const createRecord = useDoctorStore((state) => state.createRecord);
  const doctor = useDoctorStore((state) => state.doctor);
  const patient = useDoctorStore((state) => state.patient);
  const getPatient = useDoctorStore((state) => state.getPatient);

  const [formData, setformData] = useState({
    description: "",
  });
  const { pid, sid } = useParams();

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createRecord(pid, sid, doctor._id, formData["description"]);
    navigate("/doctor/session/" + sid);
  };

  const { description } = formData;
  useEffect(() => {
    if (pid) getPatient(pid);
  }, [pid]);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      {patient ? (
        <div className="flex justify-center w-full">
          <Box rounded={"lg"} p={8} className="md:w-4/5">
            <h1 className="text-2xl text-blue-500 font-semibold mb-3 border-b-2 border-blue-500">
              {patient.name}'s record for{" "}
              {moment(new Date()).format("DD-MM-YYYY")}
            </h1>
            <form
              className="form"
              action="create-profile.html"
              onSubmit={(e) => onSubmit(e)}
            >
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Prescription Content</FormLabel>
                  <Textarea
                    type="text"
                    placeholder="What was your evaluation and description of patient condition"
                    name="description"
                    rows={10}
                    value={description}
                    onChange={(e) => onChange(e)}
                    required
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
                    // onClick={async () => {
                    //   uploadFile();
                    //   //navigate("/patient");
                    // }}
                  >
                    CREATE
                  </Button>
                </Stack>
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
