import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: linear-gradient(to right, #eb3349 40%, #ff98e4);

  @media (max-width: 823px) {
    height: 8.8rem;
  }
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  flex: 70%;
  align-items: center;
  padding-left: 25.5%;

  @media (max-width: 868px) {
    padding-left: 2%;
    transition: padding-left 0.2s ease-in-out;
  }

  @media (max-width: 823px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    margin-left: -10px;
    
    flex-direction: column;
  }
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  padding-right: 15%;

  @media (max-width: 868px) {
    padding-right: 2%;
    transition: padding-left 0.2s ease-in-out;
  }

  @media (max-width: 823px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    padding-top: 15px;
  }
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  padding-top: 17px;
  
  @media (max-width: 823px) {
    flex-direction: column;
  }
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
`;

export const HeaderLogoLink = styled(Link)`
  font-family: 'Audiowide', sans-serif;
  font-size: xx-large;
  font-weight: bold;
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    color: white;
  }
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.2s;
  margin: 10px;
  &:Hover {
    color: black;
  }
  
  &:visited {
    text-decoration: none;
  } 
`;

export const FacebookIcon= styled(FaFacebook)`
  ${SocialIcon};
`;

export const InstagramIcon= styled(FaInstagram)`
  ${SocialIcon};
`;

export const TwitterIcon= styled(FaTwitter)`
  ${SocialIcon};
`;
