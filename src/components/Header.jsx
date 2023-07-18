import React from "react";
import { styled } from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <MenuContainer>
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </MenuContainer>
        <MenuContainer>
          <img src="/images/search-icon.svg" alt="home-icon" />
          <span>SEARCH</span>
        </MenuContainer>
        <MenuContainer>
          <img src="/images/watchlist-icon.svg" alt="home-icon" />
          <span>WATCHLIST</span>
        </MenuContainer>
        <MenuContainer>
          <img src="/images/original-icon.svg" alt="home-icon" />
          <span>ORIGINALS</span>
        </MenuContainer>
        <MenuContainer>
          <img src="/images/movie-icon.svg" alt="home-icon" />
          <span>MOVIES</span>
        </MenuContainer>
        <MenuContainer>
          <img src="/images/series-icon.svg" alt="home-icon" />
          <span>SERIES</span>
        </MenuContainer>
      </NavMenu>
      <UserImg src="https://img.favpng.com/3/21/8/icon-people-png-favpng-YjzPB8Ux8MUjBA5g58iDvVSzJ.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    height: 20px;
  }
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    transform: uppercase;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background: white;
      bottom: -6px;
      right: 0;
      left: 0;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
