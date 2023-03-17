import React, {  useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavbarContainer, LeftContainer, 
  RightContainer, NavbarInnerContainer, 
  NavbarExtendedContainer, NavbarLinkContainer, 
  NavbarLink,  OpenLinksButton, 
  NavbarLinkExtended, NavbarUserContainer,
} from '../styles/Navbar.style';

  export const  Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [user, initializing] = useAuthState(auth);

    if(initializing) {
      return <div>Loading...</div>
    }

    /* Function to allow users to signout */
  const signUserOut = async () => {
    await signOut(auth);
  }
  
    return (
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
                {/* Links for Navbar */}
              <NavbarLink to="/"> Home </NavbarLink>
              <NavbarLink to="/categories"> Categories </NavbarLink>
              <NavbarLink to="/about"> About Us </NavbarLink>
              {!user && <NavbarLink to="/login"> Login In </NavbarLink>}
              {user && 
              <NavbarLink onClick={signUserOut}>Log out</NavbarLink>}
                {/* Button for burger menu. When clicked setExtendedNavbar
                takes a function as an argument and receives current state of extendNavbar:
                this will re-render the new state value, and display the new appearance of displaying or hiding extended links. */}
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
                {/* Displays the current users name and photo when logged in through:
                Google Auth*/}
            <NavbarUserContainer>
              {user && (
                <>
              <p>{user?.displayName}</p>
              {user.providerData.some((provider) => provider.providerId === "google.com") && ( 
              <img src={user?.photoURL || ""} referrerPolicy="no-referrer" width='35' height='35'></img>
              )}
              </>
              )}
            </NavbarUserContainer>
          </RightContainer>
        </NavbarInnerContainer>
        
        {extendNavbar && (
          <NavbarExtendedContainer>
              {/* Links for extended navbar */}
            <NavbarLinkExtended 
            onClick={() => setExtendNavbar(false)} to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/categories"> Categories </NavbarLinkExtended>
            <NavbarLinkExtended onClick={() => setExtendNavbar(false)}to="/about"> About Us</NavbarLinkExtended>
              {/* Login link for extended navbar, it is show only when the user is not logged in*/}
            {!user && <NavbarLinkExtended
             onClick={() => setExtendNavbar(false)} 
            to="/login"> Login </NavbarLinkExtended>} 
              {/* Logout link for extended navbar, it is shown only if the user is logged in*/}
            {user && <NavbarLinkExtended 
            onClick={() => 
            {signUserOut(); setExtendNavbar(false);}} 
            to="/">Log out</NavbarLinkExtended>}
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    );
  }
  
