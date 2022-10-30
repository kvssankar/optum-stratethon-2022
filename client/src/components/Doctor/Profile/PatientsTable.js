import React from "react";
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import ComponentLoader from "../../Loader/ComponentLoader";
import { useDoctorStore } from "../../../store/doctorStore";

const PatientsTable = () => {
  const navigate = useNavigate();
  const onButtonClick = (session_id) => {
    const x = "/doctor/session/" + session_id;
    navigate(x);
  };
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);

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
          {doctorSessions ? (
            doctorSessions.map((session) => (
              <Tr key={session._id}>
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
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
