import React from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import {selectCars} from '../features/car/carSlice'
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  
  const [bugerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <a href="#">
        <svg
          class="tds-icon"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
          aria-level="2"
          style={
              {
                  width: '120px',
                  objectFit: 'contain',
                  height: '24px'
              }
          }
        >
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="var(--tds-icon-fill-secondary)"
          ></path>
        </svg>
      </a>

      <MenuGroup>
        {
          cars && cars.map((car,index) => <a key={index} href="#">{car}</a>)
        }
      </MenuGroup>
      <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <MenuIconContainer onClick={() => setBurgerStatus(true)}>
            <MenuIcon/>
          </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={bugerStatus}>
        <CloseContainer>
          <Close onClick={() => setBurgerStatus(false)} />
        </CloseContainer>
        {
          cars && cars.map((car,index) => <li key={index}><a href="#">{car}</a></li>)
        }
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Changing</a></li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    a{
      z-index: 23;
      font-weight: 600;
      padding: 0 10px;
      cursor: pointer;
    }

    @media(max-width: 768px){
      display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items:center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      padding-right: 10px;
    }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items:center;
  cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    transform: ${props => props.status ? "translateX(0)" : "translateX(100%)"};
    transition: transform 250ms linear; 
    li{
      list-style: none;
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);

      a{
        font-weight: 600;
      }
    }
`;

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    z-index: 10;
`

const Close = styled(CloseIcon)`
    align-self: end;
`;