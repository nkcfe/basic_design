import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import "./Select.css";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Selected = styled.div`
  width: 160px;
  height: 40px;

  padding: 10px;
  margin: 5px;

  cursor: pointer;

  border-radius: 8px;
  border: 1px solid #d9d9d9;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 16px;
    color: #d9d9d9;
  }
  span {
    font-size: 16px;
  }

  &:hover {
    border: 1px solid #0d6dfc;
  }
`;

const Ul = styled.ul`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 160px;
  background: #fff;

  border-radius: 8px;
  border: 1px solid #f6f6f6;
  padding: 5px;
  margin: 0 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03),
    0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.03);
`;

const Li = styled.li`
  padding: 10px;

  display: flex;
  justify-content: start;
  align-items: center;
  width: 148px;
  height: 35px;

  border-radius: 5px;

  font-size: 16px;
  cursor: pointer;

  background: ${({ selected }) => (selected ? "#E6F4FF" : null)};

  &:hover {
    background: ${({ selected }) => (selected ? "#E6F4FF" : "#f6f6f6")};
  }
`;

const Select = () => {
  const [selectedName, setSelectedName] = useState("Jack");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectName = (e) => {
    setSelectedName(e.target.innerText);
    handleOpenSelect();
  };

  return (
    <Base>
      <Selected onClick={handleOpenSelect}>
        <span>{selectedName}</span>
        <AiOutlineDown />
      </Selected>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <Ul>
          <Li
            selected={selectedName === "Jack"}
            onClick={(e) => handleSelectName(e)}
          >
            Jack
          </Li>
          <Li
            selected={selectedName === "Lucy"}
            onClick={(e) => handleSelectName(e)}
          >
            Lucy
          </Li>
          <Li
            selected={selectedName === "Chul"}
            onClick={(e) => handleSelectName(e)}
          >
            Chul
          </Li>
        </Ul>
      </CSSTransition>
    </Base>
  );
};

export default Select;
