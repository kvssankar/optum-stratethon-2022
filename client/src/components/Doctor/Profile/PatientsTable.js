import React, { useState, useEffect } from "react";
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
  IconButton,
} from "@chakra-ui/react";
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
  const getDoctorSessions = useDoctorStore((state) => state.getDoctorSessions);
  function getDoctorSessionsFunction() {
    getDoctorSessions(doctor._id);
  }
  useEffect(() => {
    getDoctorSessionsFunction(doctor._id);
    console.log(doctorSessions[0]);
  }, []);

  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      <Table size='sm' variant='simple' colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Patient Name</Th>
            <Th>Date</Th>
            <Th>Problem</Th>
            <Th>Description</Th>
            <Th>Open</Th>
          </Tr>
        </Thead>
        <Tbody>
          {doctorSessions[0].map((session) => (
            <Tr>
              <Td>1</Td>
              <Td>
                {session.patient_id["name"] && session.patient_id["name"]}
              </Td>
              <Td>
                {session.started_at ? session.started_at.substring(0, 10) : "-"}
              </Td>
              <Td>{session.disease ? session.disease : "-"}</Td>
              <Td>{session.description ? session.description : "-"}</Td>

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
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
