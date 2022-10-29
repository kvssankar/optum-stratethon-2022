import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Tag,
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

const AllPatientsTable = () => {
  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      <Table size='sm' variant='simple' colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Diseases</Th>
            <Th>Status</Th>
            <Th>Download</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Blood Test</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Cholera Test</Td>
            <Td>
              <Tag>Sample Tag</Tag>
            </Td>
            <Td>
              <DownloadIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>Blood Test</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Cholera Test</Td>
            <Td>
              <Tag bgColor='grey'>Sample Tag</Tag>
            </Td>
            <Td>
              <DownloadIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>Blood Test</Td>
            <Td>5th Octover, 2022</Td>
            <Td>Cholera Test</Td>
            <Td>
              <Tag>Sample Tag</Tag>
            </Td>
            <Td>
              <DownloadIcon />
            </Td>
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

export default AllPatientsTable;
