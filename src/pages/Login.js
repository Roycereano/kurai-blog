import React, { useEffect } from "react";
import { useState } from "react"; 
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom"
import { LoginContainer, LoginForm, LoginInput, 
  LoginButton, SignUpLink,
  GoogleButton } from '../styles/Login.style'


  export const Login = ({ setShowHeader }) => {

    useEffect(() => {
      setShowHeader(false);
      return () => setShowHeader(true);
    }, [setShowHeader])

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signInWithGoogle = async () => {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate('/');
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const userCrendtial = await signInWithEmailAndPassword(auth, email, pass);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    const handleSignUpClick = () => {
      navigate('/signup');
    };

    const handleBackClick = () => {
      navigate('/');
    };

  return(
    <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <h2>Log in to Kurai</h2>
        <LoginInput value={email} onChange={(e) => setEmail(e.target.value)}
        type="text" className="login_textBox" placeholder="username" />
        <LoginInput value={pass} onChange={(e) => setPass(e.target.value)} 
        type="password" className="login_textBox" placeholder="********"/>
        <LoginButton type="submit">Log in</LoginButton>
        <SignUpLink onClick={handleSignUpClick}>Don't have an account? Sign Up here!</SignUpLink>
        <GoogleButton onClick={signInWithGoogle}>Google</GoogleButton>
      </LoginForm>
    </LoginContainer>
  );
}
