import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    HeaderContainer, HeaderInnerContainer, 
    HeaderLeftContainer, HeaderLogoLink, 
    HeaderLogoContainer, HeaderRightContainer, SocialIcon,
} from '../styles/Header.style';

export const Header = () => {

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLeftContainer>
          <HeaderLogoContainer>
          <HeaderLogoLink to='/'>Kurai</HeaderLogoLink>
          </HeaderLogoContainer>
          </HeaderLeftContainer>
          <HeaderRightContainer>
          <SocialIcon href='https://www.facebook.com/profile.php?id=100070162330068' 
          target="_blank" title='Facebook' ><FaFacebook /></SocialIcon>
          <SocialIcon href='https://www.instagram.com/rstrawberriess/' 
          target="_blank" title='Instagram' ><FaInstagram /></SocialIcon>
          <SocialIcon href='https://twitter.com/ExePain' 
          target="_blank" title='Twitter' ><FaTwitter /></SocialIcon>
          </HeaderRightContainer>
      </HeaderInnerContainer>
    </HeaderContainer>
  )
}

