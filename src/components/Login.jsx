import React from "react";
import { styled } from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All there</SignUp>
        <Description>
          Log-in Details means the Purchaser's unique username and password used
          to access the Services, use the Website and access/use any ancillary
          services; Sample 1.
        </Description>
        <CTALogTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  min-height: calc(100vh - 70px);
  position: relative;
  &:before {
    backgorund-size: cover;
    background-position: top;
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  margin-top: 100px;
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogOne = styled.img``;

const SignUp = styled.button`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-transform: uppercase;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.4px;
  margin: 8px 0 12px 0;

  &:hover {
    background: #0483ee;
  }
`;

const CTALogTwo = styled(CTALogOne)`
  width: 90%;
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.4px;
  text-align: center;
  line-height: 1.5;
  padding-bottom: 5px;
`;
