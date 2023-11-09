import React, { useState } from "react";
import Template from "./components/Template";
import Button from "./components/Button";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";
import ModalWindow from "./components/ModalWindow";
import ModalWithoutDim from "./components/ModalWithoutDim";
import Input from "./components/Input";
import Select from "./components/Select";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const Description = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-family: "Nanum Gothic", sans-serif;
  span {
    font-size: 16px;
    color: #eb5757;
  }
`;

const Body = styled.div`
  display: flex;
  margin-left: 5px;
`;

const SelectParent = styled.div`
  padding: 30px;
  border: 3px solid #f7f6f3;
  font-size: 20px;
`;

const GradientIcon = styled(AiFillInstagram)`
  & path {
    fill: url(#gradient);
  }
  font-size: 24px;
`;

const App = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const FirstModalToggle = () => setIsFirstModalOpen(!isFirstModalOpen);
  const SecondModalToggle = () => setIsSecondModalOpen(!isSecondModalOpen);
  return (
    <>
      <Template>
        <Wrapper>
          <Title>Color Button</Title>
          <Description>
            props <span>color</span>를 사용합니다.
          </Description>
          <Body>
            <Button color="light">light</Button>
            <Button color="dark">dark</Button>
            <Button color="primary">pimary</Button>
            <Button color="success">success</Button>
            <Button color="danger">danger</Button>
          </Body>
        </Wrapper>
        <Wrapper>
          <Title>Outline Button</Title>
          <Description>
            props <span>outline</span>을 사용합니다.
          </Description>
          <Body>
            <Button outline="default">light</Button>
            <Button outline="secondary">secondary</Button>
            <Button outline="primary">pimary</Button>
            <Button outline="success">success</Button>
            <Button outline="danger">danger</Button>
          </Body>
        </Wrapper>
        <Wrapper>
          <Title>Sizes</Title>
          <Description>
            props <span>size</span>를 사용합니다.
          </Description>
          <Body>
            <Button color="primary" size="small">
              Small button
            </Button>
            <Button color="primary">Medium button</Button>
            <Button color="primary" size="large">
              Large button
            </Button>
          </Body>
        </Wrapper>
        <Wrapper>
          <Title>Icon in button</Title>
          <Description>
            <span>children</span>으로 넘겨줍니다.
          </Description>
          <Body>
            <Button>
              <AiFillYoutube style={{ color: "red", fontSize: "24px" }} />
              Youtube
            </Button>
            <Button>
              <svg height="0" width="0" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" style={{ stopColor: "red" }} />
                    <stop offset="50%" style={{ stopColor: "orange" }} />
                    <stop offset="100%" style={{ stopColor: "yellow" }} />
                  </linearGradient>
                </defs>
              </svg>
              <GradientIcon />
              Instagram
            </Button>
          </Body>
        </Wrapper>
        <Wrapper>
          <Title>Modal button</Title>
          <Description>
            외부영역을 클릭시 닫히는 모달과 버튼으로만 닫히는 모달입니다.
          </Description>
          <Body>
            <ModalWindow
              handleModalToggle={FirstModalToggle}
              isOpen={isFirstModalOpen}
            />
            <ModalWithoutDim
              handleModalToggle={SecondModalToggle}
              isOpen={isSecondModalOpen}
            />
          </Body>
        </Wrapper>
        <Wrapper>
          <Title>Input</Title>
          <Description>
            숫자만 입력되며, 천단위 콤마 기능이 추가된 input입니다.
          </Description>
          <Body>
            <Input />
          </Body>
        </Wrapper>

        <Wrapper>
          <Title>Dropdown</Title>
          <Description>부모 요소를 덮는 Dropdown입니다.</Description>
          <Body>
            <SelectParent>
              부모
              <Select />
            </SelectParent>
          </Body>
        </Wrapper>
      </Template>
    </>
  );
};

export default App;
