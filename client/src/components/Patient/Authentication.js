import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePatientStore } from "../../store/patientStore";

const SimpleCard = () => {
  const [progress, setProgress] = useState(0);
  const [formData, setformData] = useState({
    email: "",
    otp: "",
    name: "",
    gender: "",
    address: "",
    age: "",
  });

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const { email, otp, gender, address, age, name } = formData;
  const [userExists, setUserExists] = useState(false);
  const sendotp = usePatientStore((state) => state.getOtp);
  const login = usePatientStore((state) => state.login);
  const register = usePatientStore((state) => state.register);
  const action = async () => {
    if (progress === 0) {
      try {
        let flag = await sendotp(email);
        if (flag === 2) {
          setUserExists(true);
        }
        if (flag === 1) {
          setUserExists(false);
        }
        setProgress(progress + 1);
      } catch (err) {
        console.log(err);
      }
    } else if (progress === 1) {
      if (userExists) {
        try {
          await login(email, otp);
          navigate("/patient");
        } catch (err) {
          console.log(err);
        }
      }
      if (!userExists) {
        setProgress(progress + 1);
      }
    } else if (progress === 2) {
      try {
        if (!name || !email || !otp || !address || !age || !gender) {
          alert("Please fill all the fields");
          return;
        }
        await register(name, email, address, age, gender, otp);
        navigate("/patient");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Heading color="gray" fontSize={"xl"}>
            (Patient Login)
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form
            className="form"
            action="create-profile.html"
            onSubmit={(e) => onSubmit(e)}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </FormControl>

              {/* FORM PART 1 */}
              {progress === 1 && (
                <FormControl id="otp">
                  <FormLabel>OTP</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your OTP"
                    name="otp"
                    value={otp}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
              )}

              {/* FORM PART 2 */}
              {progress === 2 && (
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="string"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
              )}
              {progress === 2 && (
                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="string"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
              )}
              {progress === 2 && (
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="string"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
              )}
              {progress === 2 && (
                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Input
                    type="string"
                    placeholder="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => onChange(e)}
                  />
                </FormControl>
              )}
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  onClick={action}
                >
                  {progress === 0 && "SEND OTP"}
                  {progress === 1 && "PROCEED"}
                  {progress === 2 && "CONFIRM DETAILS"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SimpleCard;
