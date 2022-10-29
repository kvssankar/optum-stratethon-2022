import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { FiDownload } from "react-icons/fi";
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
  IconButton,
} from "@chakra-ui/react";

const AllSessionTable = () => {
  const onButtonClick = () => {};

  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      <Table size='sm' variant='simple' colorScheme={"blue"}>
        <Thead>
          <Tr>
            <Th isNumeric>Sno</Th>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Download</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Blood Test</Td>
            <Td>7th Octover, 2022</Td>
            <Td>
              <Tag bgColor='lightgreen'>Completed</Tag>
            </Td>
            <Td>
              <IconButton
                variant='outline'
                aria-label='open menu'
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td> MRI</Td>
            <Td>9th Octover, 2022</Td>
            <Td>
              <Tag bgColor='lightgreen'>Completed</Tag>
            </Td>
            <Td>
              <IconButton
                variant='outline'
                aria-label='open menu'
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>

          <Tr>
            <Td>4</Td>
            <Td>XRAY Chest</Td>
            <Td>15th Octover, 2022</Td>
            <Td>
              <Tag bgColor='lightgreen'>Completed</Tag>
            </Td>
            <Td>
              <IconButton
                variant='outline'
                aria-label='open menu'
                icon={<FiDownload />}
                onClick={() => onButtonClick()}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>XRAY Eye</Td>
            <Td>16th Octover, 2022</Td>
            <Td>
              <Tag bgColor='orange'>In Progress</Tag>
            </Td>
            <Td>
              <IconButton
                variant='outline'
                aria-label='open menu'
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
