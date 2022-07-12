import React from "react";
import styled from "styled-components";

export const JobDetails = ({ job }) => {
  return job ? (
    <Container>
      <Title>{job.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
    </Container>
  ) : null;
};

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: 10px;
  padding: 28px;
  border-radius: 4px;
  background-color: #ffffff;
  overflow-y: scroll;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
`;
