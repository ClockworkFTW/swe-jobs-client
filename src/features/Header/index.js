import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = ({ setHeaderHeight }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.clientHeight);
  }, []);

  return (
    <Container ref={headerRef}>
      <div>
        <Logo to="/">SWE Jobs</Logo>
        <Nav to="/jobs">View Jobs</Nav>
        <Nav to="/resume">Upload Resume</Nav>
      </div>
      <div>
        <Button to="/sign-in">Sign In</Button>
        <Button to="/sign-up">Sign Up</Button>
      </div>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;

const Logo = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
`;

const Nav = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: #000000;
  :hover {
    cursor: pointer;
    color: #3b82f6;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
  background-color: #3b82f6;
  :hover {
    cursor: pointer;
  }
`;
