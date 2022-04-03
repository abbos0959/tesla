import React from "react";
import styled from "styled-components";
import ima from "../images/logo.svg";

export const Header = () => {
  return (
    <Heade>
      <ImageUrl src={ima} />
      <Menu>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </Menu>
      <AccountBar>
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </AccountBar>
    </Heade>
  );
};

const Heade = styled.div`
  padding: 15px;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: fit-content;
`;
const ImageUrl = styled.img`
  background-size: contain;
  margin-left: 30px;
  cursor: pointer;
`;
const Menu = styled.div`
  display: flex;
  p {
    margin-left: 20px;
    cursor: pointer;

    padding: 10px 13px;
    border-radius: 10px;
    background: none;
    transition: all 0.8s ease;
  }
  p:hover {
    box-sizing: border-box;
    background: #eee;

    padding: 10 13px;
    border-radius: 10px;
  }
`;
const AccountBar = styled.div`
  display: flex;
  p {
    margin-right: 30px;
    padding: 10px 13px;
    transition: all 0.8s ease;
    border-radius: 10px;
  }
  p:hover{
      background-color: #eee;
      cursor: pointer;
      
  }
`;
