import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 300.6 63.837"
    {...props}
  >
    <g transform="translate(0 -42.831)">
      <path
        data-name="Path 1"
        d="M76.171 88.251l-1.74-2.593a1.549 1.549 0 010-1.726l1.97-2.936a1.549 1.549 0 000-1.726l-1.973-2.937a1.549 1.549 0 010-1.726l1.971-2.936a1.549 1.549 0 000-1.726l-1.971-2.937a1.549 1.549 0 010-1.726l1.971-2.936a1.549 1.549 0 000-1.726l-1.971-2.937a1.549 1.549 0 010-1.726l1.971-2.936a1.549 1.549 0 000-1.726l-1.971-2.937a1.549 1.549 0 010-1.726l1.74-2.593a.774.774 0 00-.643-1.206H23.47v46.625h52.058a.775.775 0 00.643-1.207z"
        fill="#bed8fb"
      />
      <path
        data-name="Path 2"
        d="M41.521 42.92l-.195-.089H23.47v46.626h26.912V53.783c0-4.339-3.147-8.2-8.861-10.864z"
        fill="#9dc6fb"
      />
      <path
        data-name="Path 3"
        d="M0 95.715c0 6.049 10.508 10.952 23.47 10.952s23.47-4.9 23.47-10.952V53.783H0z"
        fill="#ecf4ff"
      />
      <path
        data-name="Path 4"
        d="M43.813 53.783v41.932c0 5.8-9.673 10.552-21.9 10.928q.776.024 1.565.025c12.962 0 23.47-4.9 23.47-10.952V53.783z"
        fill="#cbe2ff"
      />
      <ellipse
        data-name="Ellipse 1"
        cx={23.47}
        cy={10.952}
        rx={23.47}
        ry={10.952}
        transform="translate(0 42.831)"
        fill="#ecf4ff"
      />
      <path
        data-name="Path 5"
        d="M41.569 46.811a6.2 6.2 0 011.615 4c0 6.049-10.508 10.952-23.47 10.952-7.285 0-13.795-1.549-18.1-3.98 3.424 4.071 11.918 6.953 21.855 6.953 12.962 0 23.47-4.9 23.47-10.952 0-2.649-2.015-5.083-5.37-6.973z"
        fill="#cbe2ff"
      />
      <ellipse
        data-name="Ellipse 2"
        cx={7.823}
        cy={3.755}
        rx={7.823}
        ry={3.755}
        transform="translate(15.646 50.028)"
        fill="#b78b7a"
      />
    </g>
  </svg>
  );
};

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
