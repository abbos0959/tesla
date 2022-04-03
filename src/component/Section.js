import React from "react";
import styled from "styled-components";
import imag from "../images/model-s.jpg";

export const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h2>Model S</h2>
        <p> Order Online For Touchives Delivery</p>
      </ItemText>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${imag});
`;
const ItemText = styled.div`
 padding: 15vh;
text-align: center; 
/* border: 1px solid red; */
p{
    margin-top: 10px;
}


`;
