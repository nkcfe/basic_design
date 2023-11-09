import React from "react";
import styled from "styled-components";

const Base = styled.div`
  padding: 20px;
`;

const Template = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Template;
