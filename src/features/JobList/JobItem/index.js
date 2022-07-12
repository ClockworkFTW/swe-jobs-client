import React from "react";
import { formatDistance } from "date-fns";
import styled from "styled-components";

export const JobItem = ({ job, active, setJob }) => {
  const timeSincePosting = formatDistance(new Date(), new Date(job.date));

  return (
    <Wrapper active={active} onClick={() => setJob(job)}>
      <Container>
        <Match match={job.match}>{job.match}</Match>
        <Content>
          <Title>{job.title}</Title>
          <Metadata>
            {job.company} - {job.location} - {timeSincePosting} ago
          </Metadata>
          <Salary>
            Salary: ${job.salary.min.toLocaleString("en-US")} - $
            {job.salary.max.toLocaleString("en-US")}
          </Salary>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px 10px 10px 10px;
  padding: 14px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #ffffff;
  border: ${({ active }) =>
    active ? "2px solid #3b82f6" : "2px solid #ffffff"};
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
`;

const Match = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  font-weight: 700;
  background-color: ${({ match }) => {
    if (match < 100 && match >= 80) return "#86efac";
    if (match < 80 && match >= 60) return "#fde047";
    if (match < 60 && match >= 40) return "#fdba74";
    if (match < 40) return "#fca5a5";
  }};
  color: ${({ match }) => {
    if (match < 100 && match >= 80) return "#166534";
    if (match < 80 && match >= 60) return "#854d0e";
    if (match < 60 && match >= 40) return "#9a3412";
    if (match < 40) return "#991b1b";
  }};
`;

const Content = styled.div``;

const Title = styled.h3`
  font-weight: 700;
`;

const Metadata = styled.p`
  margin: 8px 0px;
  font-size: 14px;
`;

const Salary = styled.p`
  font-size: 14px;
`;
