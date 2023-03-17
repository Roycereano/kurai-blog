import styled from 'styled-components';


export const SignupContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(75deg, #eb3349, #ff98e4 56%, #f7994d);
  color: white;

  & h2 {
    font-size: x-large;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem 3.89rem;
  border: 3px solid white;
  border-radius: 10px;

  @media (max-width: 823px) {
    padding: 3rem 2.89rem;
  }
`;

export const SignupInput = styled.input`
  margin: 0.5rem;
  margin-left: 2px;
  margin-right: 2px;
  padding: 1rem;
  border: none;
  border-radius: 10px;

  ::placeholder {
    color: pink;
  }
`;

export const SignupButton = styled.button`
  border: none;
  background-color: white;
  padding: 12px;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 10px;
  cursor: pointer;
  color: pink;

  &:hover {
    color: black;
  }

  transition: color 0.3s ease;
`;

export const LoginLink = styled.button`
  background: none;
  border: none;
  color: white;
  margin-top: 5px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: black;
  }

  transition: color 0.3s ease;
`;

export const GoogleButton = styled.button`
  transition: background-color .3s, box-shadow .3s;
  padding: 10px 16px 12px 16px;
  margin-top: 15px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
  Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
  }
`;