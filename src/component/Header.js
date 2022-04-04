import React, { useState } from "react";
import styled from "styled-components";
import ima from "../images/logo.svg";
// import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { selectCars } from "../features/Car/carSlice";
import {useSelector} from "react-redux"

export const Header = () => {
  const [btn, setbtn] = useState(false);
  const cars1=useSelector(selectCars)
  console.log(cars1);
  const Change = () => {
    setbtn(!btn);
    console.log(btn);
  };
  return (
    <Heade>
      <ImageUrl src={ima} />
      <Menu>
        {cars1 && cars1.map((car,index)=>(
          <p key={index}>{car}</p>
        ))}
       
      </Menu>
      <AccountBar>
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
        <CustomMenu onClick={() => Change()} />
      </AccountBar>
      <BurgerNav show={btn}>
        <CloseWrapper>
          <CloseBar onClick={() => Change()} />
        </CloseWrapper>
        
        {cars1 && cars1.map((car,index)=>(
          <p key={index}>{car}</p>
        ))}
      </BurgerNav>
    </Heade>
  );
};

const Heade = styled.div`
  padding: 0 20px;
  display: flex;
  z-index: 1;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
`;
const ImageUrl = styled.img`
  background-size: contain;
  /* margin-left: 30px; */
  cursor: pointer;
`;
const Menu = styled.div`
  display: flex;
  p {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    /* font-size: 10px; */

    padding: 10px 10px;
    border-radius: 10px;
    background: none;
    transition: all 0.8s ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
    font-weight: 600;
    margin-right: 10px;
    /* padding: 10px 13px; */
    transition: all 0.8s ease;
    border-radius: 10px;
    padding: 10px;
  }
  p:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const BurgerNav = styled.div`
  transition: all 0.4s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  p {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
    cursor: pointer;
  }
`;
const CloseBar = styled(AiOutlineClose)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  margin-left: auto;
`;
