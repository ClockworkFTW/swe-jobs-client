import React, { useState, useEffect } from "react";
import styled from "styled-components";

// API
import * as jobAPI from "../../api/job";

// Features
import { JobMenu } from "../../features/JobMenu";
import { JobList } from "../../features/JobList";
import { JobDetails } from "../../features/JobDetails";

export const Jobs = () => {
  // Job list state
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  // Job detail state
  const [job, setJob] = useState(null);

  // Menu state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("MATCH");
  const [menuHeight, setMenuHeight] = useState(0);

  // Fetch jobs
  useEffect(() => {
    const getJobs = async () => {
      try {
        setLoading(true);

        let jobs = await jobAPI.getJobs();
        jobs = jobs.sort((jobA, jobB) => jobB.match - jobA.match);

        setJobs(jobs);
        setJob(jobs[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  return (
    <Container>
      <Sidebar>
        <JobMenu
          jobCount={jobs.length}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          setMenuHeight={setMenuHeight}
        />
        <JobList
          jobs={jobs}
          job={job}
          setJob={setJob}
          search={search}
          sort={sort}
          menuHeight={menuHeight}
        />
      </Sidebar>
      <Main>
        <JobDetails job={job} />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  height: 100%;
`;

const Sidebar = styled.div`
  position: relative;
  height: 100%;
`;

const Main = styled.div`
  position: relative;
  height: 100%;
`;
