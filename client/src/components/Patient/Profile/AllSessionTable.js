import React from "react";
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { times } from "../../../constants/globalconstants";
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

import { usePatientStore } from "../../../store/patientStore";
import moment from "moment";

const AllSessionTable = () => {
  const navigate = useNavigate();
  const onButtonClick = (session_id) => {
    const x = "/patient/session/" + session_id;
    navigate(x);
  };

  const patientSessions = usePatientStore((state) => state.sessions);

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
            <Th>Base Cost</Th>
            <Th>Claim Cost</Th>
            <Th>Open</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientSessions.map((session, idx) => (
            <Tr key={session._id}>
              <Td>{idx + 1}</Td>
              <Td>{times[session.started_at.time]}</Td>
              <Td>{moment(session.started_at.date).format("LL")}</Td>
              <Td>
                {session.ended_at
                  ? moment(session.ended_at).format("LL")
                  : "In Progress"}
              </Td>
              <Td>{session.description}</Td>
              <Td>{session.BASE_ENCOUNTER_COST}</Td>
              <Td>{session.TOTAL_CLAIM_COST}</Td>
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
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AllSessionTable;
