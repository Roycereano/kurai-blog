import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { async } from '@firebase/util';
import { auth, provider } from "../firebase";
import { SignupContainer, SignupForm, SignupButton, SignupInput, 
GoogleButton, LoginLink} from '../styles/signup.style'

export const SignUp = ({ setShowHeader }) => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setShowHeader(false);
    return () => setShowHeader(true);
  }, [setShowHeader])

   const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPass);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };  

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  }

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <SignupContainer>
        <SignupForm onSubmit={handleSignup}>
          <h2>Sign up to Kurai</h2>
        <SignupInput value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}
        type="text" className="login_textBox" placeholder="username" />
        <SignupInput value={registerPass} onChange={(e) => setRegisterPass(e.target.value)} 
        type="password" className="login_textBox" placeholder="********"/>
        <SignupButton type="submit">Sign up</SignupButton>
        <LoginLink onClick={handleLoginClick}>Already have an account? Log in here!</LoginLink>
        <GoogleButton onClick={signInWithGoogle}>Google</GoogleButton>
      </SignupForm>
    </SignupContainer>
  )

}
