import React from "react";
import { FiDownload } from "react-icons/fi";
import {
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";

const AllSessionTable = () => {
  const onButtonClick = () => {};

  return (
    <TableContainer border={"2px"} rounded="md" borderColor={"blue.500"}>
      <Table size="sm" variant="simple" colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Visitation Required</Th>
            <Th>Diagnosis</Th>
            <Th>Download</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td> CT Scan </Td>
            <Td>9th Octover, 2022</Td>
            <Td>
              <Tag bgColor="lightgreen">Completed</Tag>
            </Td>
            <Td>Yes</Td>
            <Td>Pneumothorax</Td>
            <Td>
              <IconButton
                variant="outline"
                aria-label="open menu"
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>

          <Tr>
            <Td>2</Td>
            <Td>CT Eye</Td>
            <Td>12th Octover, 2022</Td>
            <Td>
              <Tag bgColor="lightgreen">Completed</Tag>
            </Td>
            <Td>yes</Td>
            <Td>Mild Retinopathy</Td>
            <Td>
              <IconButton
                variant="outline"
                aria-label="open menu"
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>CT Eye</Td>
            <Td>15th Octover, 2022</Td>
            <Td>
              <Tag bgColor="lightgreen">Completed</Tag>
            </Td>
            <Td>No</Td>
            <Td>Clear</Td>
            <Td>
              <IconButton
                variant="outline"
                aria-label="open menu"
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>CT Lungs</Td>
            <Td>16th Octover, 2022</Td>
            <Td>
              <Tag bgColor="lightgreen">Completed</Tag>
            </Td>
            <Td>Yes</Td>
            <Td>Effusion</Td>
            <Td>
              <IconButton
                variant="outline"
                aria-label="open menu"
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
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

export default AllSessionTable;
