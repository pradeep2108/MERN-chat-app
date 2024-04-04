import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};

  const getGuestCredentials = () => {
    setEmail("guest@buzzchat.com");
    setPassword("root");
  };
  console.log(email + " " + password);
  return (
    <VStack>
      <FormControl id="loginEmail" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          _placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="loginPassword" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            _placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" onClick={handleClick}>
            <Button h="1.75rem" size="sm">
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="50%"
        marginTop={"20px"}
        borderRadius={"40px"}
        onClick={submitHandler}
        margin={"flex"}
      >
        Login
      </Button>
      <Button
        colorScheme="orange"
        width="50%"
        marginTop={"20px"}
        borderRadius={"40px"}
        onClick={getGuestCredentials}
      >
        Get Guest Credentials
      </Button>
    </VStack>
  );
};

export default Login;
