import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Section } from "./Section";
import down from "../images/down-arrow.svg";
import imag from "../images/model-s.jpg";
import imag2 from "../images/model-x.jpg";
import imag3 from "../images/model-y.jpg";
import imag4 from "../images/model-3.jpg";
import imag5 from "../images/solar-panel.jpg";
import imag6 from "../images/solar-roof.jpg";
import imag7 from "../images/accessories.jpg";

export const Home = () => {
  return (
    <Container>
      <Header/>
      <Section
        imag={imag}
        down={down}
        title="Model S"
        dec="Order Online For Touchives Delivery"
      />
      <Section
        imag={imag2}
        title="Model X"
        dec="Order Online For Touchives Delivery"
      />
      <Section
        imag={imag3}
        title="Model Y"
        dec="Order Online For Touchives Delivery"
      />
      <Section
        imag={imag4}
        title="Model 3"
        dec="Order Online For Touchives Delivery"
      />
 <Section
        imag={imag5}
        title="Lowest Cost Solar Panels in America"
        dec="Money-Back Guarante"
      />
      <Section
        imag={imag6}
        title="Solar for New Roofs"
        dec="Solar Roof Coost Less Than a New Roofs"
      />
        <Section
        imag={imag7}
        title="Accessories"
        dec="Solar Roof Coost Less Than a New Roofs"
      />

    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
