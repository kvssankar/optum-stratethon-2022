import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Box } from "@chakra-ui/react";
const Stepper = (ProgressNumber, setProgressNumber) => {
  const { activeStep } = useSteps({
    initialStep: 2,
  });

  return (
    <div className="md:h-[100px]">
      <Steps colorScheme="blue" activeStep={activeStep}>
        <Step label={"Radiology Lung Scan"} key={1}></Step>
        <Step label={"In Progress"} key={2}></Step>
        <Step label={"Submited "} key={3}></Step>
        <Step label={"View Results "} key={4}></Step>
      </Steps>
    </div>
  );
};

export default Stepper;
