import React from "react";
import styled from "styled-components";
import imag from "../images/model-s.jpg";
import down from "../images/down-arrow.svg";

export const Section = () => {
  return (
    <Wrap>
      <ItemText>
          <h2>Model S</h2>
          <p> Order Online For Touchives Delivery</p>
      </ItemText>
         <Buttons>
           <ButtonGroup>
             <LeftButton> Custom Order</LeftButton>
             <RightButton> Existing Inventory</RightButton>
           </ButtonGroup>
              <DownArrow src={down} />
         </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${imag});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  /* border: 1px solid red; */
  /* p {
    margin-top: 10px;
  } */
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;

`;

const DownArrow = styled.img`
  /* margin-top: 20px; */
  height: 40px;
  margin-left: 240px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
