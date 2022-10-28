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

const AllSessionTable = () => {
  return (
    <TableContainer border={"2px"} rounded="md" borderColor={"blue.500"}>
      <Table variant="simple" colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
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
            <Td className="truncate">Lorem ipsum dolor sit amet consectetur</Td>
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