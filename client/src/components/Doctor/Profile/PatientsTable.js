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

const PatientsTable = ({ flag }) => {
  const navigate = useNavigate();
  const onButtonClick = (session_id) => {
    const x = "/doctor/session/" + session_id;
    navigate(x);
  };
  const doctorSessions = useDoctorStore((state) => state.doctorSessions);

  return (
    <TableContainer border={"2px"} rounded="md" borderColor={"blue.500"}>
      <Table size="sm" variant="simple" colorScheme={"blue"}>
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
          {doctorSessions && doctorSessions.length === 0 && (
            <p className="p-3  w-full">No Appointments for today</p>
          )}
          {doctorSessions ? (
            doctorSessions.map((session, idx) => {
              return flag === 0 && !session.ended_at ? (
                <Tr key={session._id}>
                  <Td>{idx + 1}</Td>
                  <Td>{session.patient_id["name"]}</Td>
                  <Td>{moment(session.started_at.date).calendar()}</Td>
                  <Td>{session.disease}</Td>
                  <Td>{session.description}</Td>

                  <Td>
                    {" "}
                    <IconButton
                      variant="outline"
                      aria-label="open menu"
                      icon={<FiNavigation />}
                      onClick={() => onButtonClick(session.ENCOUNTER)}
                    />
                  </Td>
                </Tr>
              ) : flag === 1 && session.ended_at ? (
                <Tr key={session._id}>
                  <Td>{idx + 1}</Td>
                  <Td>{session.patient_id["name"]}</Td>
                  <Td>{moment(session.started_at.date).calendar()}</Td>
                  <Td>{session.disease}</Td>
                  <Td>{session.description}</Td>
                  <Td>
                    {" "}
                    <IconButton
                      variant="outline"
                      aria-label="open menu"
                      icon={<FiNavigation />}
                      onClick={() => onButtonClick(session.ENCOUNTER)}
                    />
                  </Td>
                </Tr>
              ) : (
                <></>
              );
            })
          ) : (
            <ComponentLoader />
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
