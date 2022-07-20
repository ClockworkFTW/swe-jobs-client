import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import { Icon } from "../../components/Icon";

export const Home = () => (
  <Wrapper>
    <Container>
      <Header>Welcome to SWE Jobs!</Header>
      <Intro>
        Your number one source of entry level software engineering positions.
      </Intro>
      <Benefits>
        <Benefit>
          <Icon icon={["fas", "sparkles"]} m="0px 10px 0px 0px" />
          New jobs added every day
        </Benefit>
        <Benefit>
          <Icon icon={["fas", "memo"]} m="0px 10px 0px 0px" />
          Upload your resume to find better matches
        </Benefit>
        <Benefit>
          <Icon icon={["fas", "sack-dollar"]} m="0px 10px 0px 0px" />
          Compare salary ranges across companies
        </Benefit>
      </Benefits>
      <Button to="/jobs">Get Started</Button>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  padding: 10px;
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 20px;
  font-size: 56px;
  font-weight: 700;
`;

const Intro = styled.p`
  font-size: 20px;
  color: #737373;
`;

const Benefits = styled.ul`
  margin: 30px 0px;
`;

const Benefit = styled.li`
  margin-top: 10px;
  font-size: 20px;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 18px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  background-color: #3b82f6;
  :hover {
    cursor: pointer;
  }
`;
