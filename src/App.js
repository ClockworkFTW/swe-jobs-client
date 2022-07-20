import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Pages
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Resume } from "./pages/Resume";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

// Features
import { Header } from "./features/Header";

// Styles
import { reset, main } from "./theme";

// Context
export const UserContext = React.createContext();

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${main}
`;

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("swe-jobs-user-token");
    setUser(token);
  }, []);

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Header setHeaderHeight={setHeaderHeight} />
        <Main headerHeight={headerHeight}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

const Main = styled.div`
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
`;
