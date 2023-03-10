import styled, { keyframes } from "styled-components";

const Circle = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  animation: fadeIn 1.2s linear infinite;
`;

const fadeIn = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
`;

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  ${Circle}:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  ${Circle}:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  ${Circle}:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  ${Circle}:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  ${Circle}:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  ${Circle}:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  ${Circle}:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  ${Circle}:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  ${Circle}:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
`;

export const Loading = (
  <Loader>
    <Circle />
    <Circle />
    <Circle />
    <Circle />
    <Circle />
    <Circle />
    <Circle />
    <Circle />
    <Circle />
  </Loader>
);
