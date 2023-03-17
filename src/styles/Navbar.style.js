import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "50px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid lightgrey;

  @media (min-width: 823px) {
    height: 50px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 25%;

  @media (max-width: 868px) {
    padding-left: 2%;
    transition: padding-left 0.2s ease-in-out;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

  img {
    border-radius: 50%;
    padding-top: 6%;
    justify-content: flex-start;
  }
`;

export const NavbarInnerContainer = styled.div `
  width: 100%;
  height: 5.5rem;
  display: flex;

  @media (max-width: 823px) {
    height: 3rem;
  }
`;

export const NavbarLinkContainer = styled.div `
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: #ffb1e3;
  }
  
  &:visited {
    text-decoration: none;
  } 

  transition: color .17s ease;
    
  @media (max-width: 823px) {
    display: none;
  }
`;

export const NavbarUserContainer = styled.div`
  display: flex;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 30px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 35px;
  cursor: pointer;
  
  @media (min-width: 823px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  background: linear-gradient(to right, #eb3349 40%, #ffb1e3);
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 823px) {
    display: none;
  }
`;