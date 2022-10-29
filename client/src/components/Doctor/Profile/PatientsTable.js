import React from "react";

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

const PatientsTable = () => {
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
