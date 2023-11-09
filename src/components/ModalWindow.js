import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "./Modal/index";
import Button from "./Button";

const Base = styled.div`
  display: inline-flex;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 250px;

  padding-block: 12px;
  padding-inline: 24px;
  span {
    font-size: 20px;
    font-family: "Lexend", sans-serif;
  }
  svg {
    font-size: 24px;
    color: red;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
`;

const ModalWindow = ({ handleModalToggle, isOpen }) => {
  return (
    <Base>
      <Button handleModalToggle={handleModalToggle}>Modal OPEN</Button>
      <Modal isOpen={isOpen} onClose={handleModalToggle}>
        <ModalBody>
          <span>Click Outside!</span>
          <AiOutlineCloseCircle onClick={handleModalToggle} />
        </ModalBody>
      </Modal>
    </Base>
  );
};

export default ModalWindow;
