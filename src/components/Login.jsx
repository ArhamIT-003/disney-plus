import React from "react";
import { styled } from "styled-components";

const Login = () => {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.png" alt="" />
      </Background>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: calc(100vh- 70px);
`;

const Background = styled.div``;
