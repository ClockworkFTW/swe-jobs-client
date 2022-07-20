import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

// API
import * as authAPI from "../../api/auth";

// Context
import { UserContext } from "../../App";

export const SignIn = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const token = await authAPI.signIn({ email, password });
      localStorage.setItem("swe-jobs-user-token", token);
      setUser(token);
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <Navigate replace to="/jobs" />
  ) : (
    <Wrapper>
      <Container>
        <Header>Sign In</Header>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signIn}>Sign In</Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  padding: 10px;
`;

const Header = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 4px 0px 10px 0px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #3b82f6;
  :hover {
    cursor: pointer;
  }
`;
