import React, { useState, useEffect } from "react";
import { FiNavigation } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { times } from "../../../constants/globalconstants";
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
  IconButton,
} from "@chakra-ui/react";

import {
  getPatientSessions,
  usePatientStore,
} from "../../../store/patientStore";
import moment from "moment";
import ComponentLoader from "../../Loader/ComponentLoader";

const AllSessionTable = () => {
  const navigate = useNavigate();
  const onButtonClick = (session_id) => {
    const x = "/session/" + session_id;
    navigate(x);
  };

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
  }, []);

  return (
    <TableContainer border={"2px"} rounded='md' borderColor={"blue.500"}>
      {!patientSessions && <ComponentLoader />}
      {patientSessions && (
        <Table size='sm' variant='simple' colorScheme={"blue"}>
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
                    variant='outline'
                    aria-label='open menu'
                    icon={<FiNavigation />}
                    onClick={() => onButtonClick(session._id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default AllSessionTable;
