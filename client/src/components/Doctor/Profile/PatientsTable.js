<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import moment from "moment";
=======
import React from "react";

>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
<<<<<<< HEAD
import ComponentLoader from "../../Loader/ComponentLoader";
import { useDoctorStore } from "../../../store/doctorStore";
import { times } from "../../../constants/globalconstants";

const PatientsTable = () => {
  const navigate = useNavigate();
  const onButtonClick = (session_id) => {
    const x = "/doctor/session/" + session_id;
    navigate(x);
  };
  const doctor = useDoctorStore((state) => state.doctor);
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);
  // console.log(doctorSessions[0].patient_id["name"]);

  useEffect(() => {
    console.log(doctorSessions);
  }, []);

=======

const PatientsTable = () => {
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
  return (
    <TableContainer border={"2px"} rounded="md" borderColor={"blue.500"}>
      <Table variant="simple" colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Patient Name</Th>
            <Th>Start Date</Th>
            <Th>Last Visit</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
<<<<<<< HEAD
          {doctorSessions ? (
            doctorSessions.map((session) => (
              <Tr>
                <Td>1</Td>
                <Td>{session.patient_id["name"]}</Td>
                <Td>{moment(session.started_at.date).calendar()}</Td>
                <Td>{session.disease}</Td>
                <Td>{session.description}</Td>

                <Td>
                  {" "}
                  <IconButton
                    variant='outline'
                    aria-label='open menu'
                    icon={<FiNavigation />}
                    onClick={() => onButtonClick(session._id)}
                  />
                </Td>
              </Tr>
            ))
          ) : (
            <ComponentLoader />
          )}
=======
          <Tr>
            <Td>1</Td>
            <Td>Mahesh</Td>
            <Td>5th Octover, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Headache</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>John</Td>
            <Td>5th Octover, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Headache</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>John</Td>
            <Td>5th Octover, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Headache</Td>
          </Tr>
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
