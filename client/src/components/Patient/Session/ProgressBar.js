import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button } from "@chakra-ui/react";

const Stepper = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 3,
  });

  return (
    <Box width='100%'>
      <Steps activeStep={activeStep}>
        <Step label={"User Login"} key={1}></Step>
        <Step label={"Interests"} key={2}></Step>
        <Step label={"Portfolio"} key={3}></Step>
      </Steps>
      <Button
        onClick={() => {
          nextStep(1);
        }}
      >
        Forward
      </Button>
      <Button
        onClick={() => {
          prevStep(1);
        }}
      >
        Previous
      </Button>
    </Box>
  );
};

export default Stepper;
