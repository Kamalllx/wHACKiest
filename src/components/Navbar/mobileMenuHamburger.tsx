import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type TProps = {
  toggle: () => void;
  colour: string;
};

const MobileMenuHamburger: React.FC<TProps> = ({ toggle, colour }) => (
  <div style={{ display: "flex" }}>
    <StyledButton onClick={toggle} aria-label="Menu">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke={colour}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          stroke={colour}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke={colour}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </StyledButton>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    style={{ transition: "stroke 0.3s ease" }}
    {...props}
  />
);

const StyledButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export default MobileMenuHamburger;

