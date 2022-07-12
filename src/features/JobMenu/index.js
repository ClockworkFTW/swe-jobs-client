import React, { useRef, useEffect } from "react";
import styled from "styled-components";

// Components
import { Icon } from "../../components/Icon";

export const JobMenu = (props) => {
  const { jobCount, setMenuHeight } = props;
  const { search, setSearch, sort, setSort } = props;

  const menuRef = useRef(null);

  useEffect(() => {
    setMenuHeight(menuRef.current?.clientHeight);
  }, []);

  return (
    <Container ref={menuRef}>
      <Input
        type="text"
        placeholder={`Search ${jobCount} jobs...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Group>
        <Button active={sort === "MATCH"} onClick={() => setSort("MATCH")}>
          <Icon icon={["fas", "star"]} m="0px 10px 0px 0px" />
          Best Match
        </Button>
        <Button active={sort === "SALARY"} onClick={() => setSort("SALARY")}>
          <Icon icon={["fas", "sack-dollar"]} m="0px 10px 0px 0px" />
          Highest Salary
        </Button>
        <Button active={sort === "RECENT"} onClick={() => setSort("RECENT")}>
          <Icon icon={["fas", "clock"]} m="0px 10px 0px 0px" />
          Most Recent
        </Button>
      </Group>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const Group = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  background-color: ${({ active }) => (active ? "#3b82f6" : "#ffffff")};
  :hover {
    cursor: pointer;
  }
`;
