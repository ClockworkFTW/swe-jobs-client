import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import styled from "styled-components";

library.add(fas);

export const Icon = ({ icon, m, p }) => <Container icon={icon} m={m} p={p} />;

const Container = styled(FontAwesomeIcon)`
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
`;
