import React from "react";
import { formatDistance } from "date-fns";
import styled from "styled-components";

// Components
import { JobItem } from "./JobItem";

export const JobList = ({ jobs, job, setJob, search, sort, menuHeight }) => {
  const jobId = job ? job.id : null;

  const sortedJobs = jobs.sort((jobA, jobB) => {
    switch (sort) {
      case "MATCH":
        return jobB.match - jobA.match;
      case "SALARY":
        return jobB.salary.max - jobA.salary.max;
      case "RECENT":
        return new Date(jobB.date) - new Date(jobA.date);
      default:
        break;
    }
  });

  const filteredJobs = sortedJobs.filter((job) =>
    job.title.toLowerCase().includes(search)
  );

  return (
    <Container menuHeight={menuHeight}>
      {filteredJobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          active={job.id === jobId}
          setJob={setJob}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: ${({ menuHeight }) => `${menuHeight}px`};
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow-y: scroll;
`;
