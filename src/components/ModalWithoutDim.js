import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "./Modal/index";
import Button from "./Button";

const Base = styled.div`
  display: inline;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 320px;

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

const BtnWrapper = styled.div``;

const ModalWindow = ({ handleModalToggle, isOpen }) => {
  return (
    <Base>
      <Button color="dark" handleModalToggle={handleModalToggle}>
        Modal OPEN2
      </Button>
      <Modal isOpen={isOpen}>
        <ModalBody>
          <span>Press the button to CLOSE!</span>
          <BtnWrapper>
            <Button outline="danger" handleModalToggle={handleModalToggle}>
              Close
            </Button>
            <Button outline="primary">Okay</Button>
          </BtnWrapper>
        </ModalBody>
      </Modal>
    </Base>
  );
};

export default ModalWindow;
