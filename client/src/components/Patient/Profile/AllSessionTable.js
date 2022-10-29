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

import {
  getPatientSessions,
  usePatientStore,
} from "../../../store/patientStore";

const AllSessionTable = () => {
  const patient = usePatientStore((state) => state.patient);
  const getPatientSessions = usePatientStore(
    (state) => state.getPatientSessions
  );
  const patientSessions = usePatientStore((state) => state.sessions);

  function getPatientSessionsFunction() {
    getPatientSessions(patient._id);
  }

  useEffect(() => {
    getPatientSessionsFunction();
    console.log(patientSessions);
    // patientSessions[0].map((session) => {
    //   console.log(session);
    // });
  }, []);

  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      <Table variant='simple' colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Booking Date</Th>
            <Th>End Date</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientSessions[0].map((session) => (
            <Tr>
              <Td>1</Td>
              <Td>{session.created_at.substring(0, 10)}</Td>
              <Td></Td>
              <Td>{session.description}</Td>
            </Tr>
          ))}
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
      </Table>
    </TableContainer>
  );
};

export default AllSessionTable;
