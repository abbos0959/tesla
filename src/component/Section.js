
import styled from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  

export const Section = ({ down, title, dec, imag }) => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Wrap bg={imag}>
      
        <ItemText>
        <div data-aos="fade-up">
          <h2>{title}</h2>
          <p>{dec} </p>
      </div>

        </ItemText>
      
      <Buttons>
      <div data-aos="fade-up">

        <ButtonGroup>
          <LeftButton> Custom Order</LeftButton>
          <RightButton> Existing Inventory</RightButton>
        </ButtonGroup>
        </div>
        <a href="#">
          
          <DownArrow src={down} />
        </a>
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bg});
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  cursor: pointer;
  position: fixed;
  z-index: 99;
  bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  height: 40px;
  margin-left: 240px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
