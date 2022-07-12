import React from "react";
import styled from "styled-components";

// Components
import { Icon } from "../../components/Icon";

export const Resume = () => (
  <Wrapper>
    <Container>
      <Header>Upload Resume</Header>
      <Disclaimer>
        <Icon icon={["fas", "triangle-exclamation"]} m="0px 10px 0px 0px" />
        In order to use this feature you must first register an account
      </Disclaimer>
      <Disclaimer>
        <Icon icon={["fas", "square-question"]} m="0px 10px 0px 0px" />
        Resume scanning works by automatically comparing your resume against our
        database of job descriptions to provide you with the best approximated
        match according to keyword occurrance.
      </Disclaimer>
      <Disclaimer>
        <Icon icon={["fas", "circle-check"]} m="0px 10px 0px 0px" />
        We take your privacy rights seriously. Resumes are securely stored and
        personal information is never shared or sold! All user data is
        completely wiped upon account deletion
      </Disclaimer>
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
  margin-bottom: 30px;
  font-size: 56px;
  font-weight: 700;
`;

const Disclaimer = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;
