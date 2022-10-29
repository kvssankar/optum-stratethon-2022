import React, { useState, useEffect } from "react";

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
import { usePatientStore } from "../../../store/patientStore";
import moment from "moment";
import ComponentLoader from "../../Loader/ComponentLoader";
=======
import {
  getPatientSessions,
  usePatientStore,
} from "../../../store/patientStore";
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15

const AllSessionTable = () => {
  const patient = usePatientStore((state) => state.patient);

  const patientSessions = usePatientStore((state) => state.sessions);

<<<<<<< HEAD
  return (
    <TableContainer border={"2px"} rounded="md" borderColor={"blue.500"}>
      <Table size="sm" variant="simple" colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Time</Th>
            <Th>Booking Date</Th>
            <Th>End Date</Th>
            <Th>Description</Th>
            <Th>Open</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientSessions.map((session) => (
            <Tr>
              <Td>1</Td>
              <Td>{times[session.started_at.time]}</Td>
              <Td>{moment(session.started_at.date).calendar()}</Td>
              <Td>
                {session.ended_at ? session.ended_at.substring(0, 10) : "-"}
              </Td>
              <Td>{session.description}</Td>
              <Td>
                {" "}
                <IconButton
                  variant="outline"
                  aria-label="open menu"
                  icon={<FiNavigation />}
                  onClick={() => onButtonClick(session._id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
=======
  function getPatientSessionsFunction() {
    getPatientSessions(patient._id);
  }

  useEffect(() => {
    getPatientSessionsFunction();
    console.log(patientSessions);
    patientSessions[0].map((session) => {
      console.log(session);
    });
  }, []);

  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      <Table variant='simple' colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientSessions[0].map((session) => {
            <Tr>
              <Td>1</Td>
              <Td>2nd October, 2022</Td>
              <Td>5th Octover, 2022</Td>
              <Td>Lorem ipsum dolor sit amet consectetur,</Td>
            </Tr>;
          })}
          <Tr>
            <Td>1</Td>
            <Td>2nd October, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Lorem ipsum dolor sit amet consectetur,</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>2nd October, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td className='truncate'>Lorem ipsum dolor sit amet consectetur</Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>2nd October, 2022</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Lorem ipsum dolor sit amet consectetur,</Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
      </Table>
    </TableContainer>
  );
};

export default AllSessionTable;
