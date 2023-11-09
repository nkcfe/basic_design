import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  margin: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background: #dbdcdd;
  height: 35px;
  border-radius: 7px 0 0 7px;
  font-size: 16px;
  border: 1px solid #a5a7aa;
`;

const CustomInput = styled.input`
  outline: none;
  border-radius: 0 7px 7px 0;
  border: 1px solid #a5a7aa;
  border-left: none;
  height: 35px;
  padding: 10px;
  margin-right: 5px;
  font-family: "Nanum Gothic", sans-serif;
`;

const CustomButton = styled.button`
  background: #1a8754;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  margin: 5px;
  font-family: "Lexend", sans-serif;
  &:hover {
    background: #146a42;
  }
`;

const Input = () => {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const onChangePrice = (e) => {
    const price = e.target.value;
    const removedCommaValue = Number(price.replaceAll(",", ""));
    if (removedCommaValue.toLocaleString() !== "NaN") {
      setPriceValue(removedCommaValue.toLocaleString());
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameValue === "" || priceValue === "") {
      return alert("Name과 Price 모두 입력해주세요.");
    }
    return alert(`{name: ${nameValue} price: ${priceValue}}`);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Title>Name</Title>
      <CustomInput
        type="text"
        placeholder="이름을 입력하세요"
        value={nameValue}
        onChange={onChangeName}
      />
      <Title>Price</Title>
      <CustomInput
        type="text"
        placeholder="가격을 입력하세요"
        value={priceValue}
        onChange={onChangePrice}
      />

      <CustomButton>SAVE</CustomButton>
    </Container>
  );
};

export default Input;
