import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Pages
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Jobs } from "./pages/Jobs";
import { Resume } from "./pages/Resume";

// Features
import { Header } from "./features/Header";

// Styles
import { reset, main } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${main}
`;

export const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header setHeaderHeight={setHeaderHeight} />
      <Main headerHeight={headerHeight}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
`;
