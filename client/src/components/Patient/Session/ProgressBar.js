import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Box } from "@chakra-ui/react";
const Stepper = (ProgressNumber, setProgressNumber) => {
  const { activeStep } = useSteps({
    initialStep: 4,
  });

  return (
    <div className="mt-5 mr-auto ml-auto">
      <Box className="">
        <Steps colorScheme="blue" activeStep={activeStep}>
          <Step label={"Radiology Lung Scan"} key={1}></Step>
          <Step label={"In Progress"} key={2}></Step>
          <Step label={"Submited "} key={3}></Step>
          <Step label={"View Results "} key={4}></Step>
        </Steps>
      </Box>
    </div>
  );
};

export default Stepper;
