import React from "react";
import { ArrowIcon } from "@/assets/icons";
import { ButtonText, Medium } from "@/styles";
import styled, { css } from "styled-components";

type Props = {
  text: string;
  size: "small" | "medium";
  classification: "primary" | "tertiary";
  disabled?: boolean;
  arrow?: boolean;
  color?: string;
  onClick?: (e?: React.MouseEvent) => void;
  isSubmitted?: boolean;
  className?: string;
};

const commonButtonStyles = css<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  justify-content: center;
  align-items: end;
  gap: 8px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const PrimaryButtonContainer = styled.button<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  ${commonButtonStyles}
  height: ${({ size }) => (size === "small" ? `42px` : `48px`)};
  max-width: min-content;
  display: flex;
  padding: ${({ arrow, size, disabled }) =>
    calculatePadding(size, arrow, disabled)};
  text-align: center;
  border-radius: 100px;
  border: ${({ size }) => (size === "small" ? `1px` : `1.5px`)} solid #c7d3ff;
  transition: border 0.3s ease;
  background: linear-gradient(80deg, #6f8df8 11.53%, #9cb1fc 90.33%);
  &:hover {
    border: ${({ size }) => (size === "small" ? `1px` : `1.5px`)} solid #fdf7ea;
  }
  &:disabled {
    padding: ${({ arrow, size, disabled }) =>
      calculatePadding(size, arrow, disabled)};
    border: 0px;
    background: rgba(255, 255, 255, 0.12);
    opacity: 0.38;
  }
`;

const TertiaryButtonContainer = styled.button<{
  size: "small" | "medium";
  arrow?: boolean;
  disabled?: boolean;
}>`
  ${commonButtonStyles}
  display: inline-flex;
  border: 0px;
  padding: 0px;
  background: transparent;
  opacity: 0.87;
  height: min-content;
  text-decoration-line: underline;
  line-height: ${({ size }) => (size == "small" ? `24px` : `normal`)};
  &:hover {
    opacity: 0.6;
  }
  &:disabled {
    opacity: 0.38;
    text-decoration-line: none;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)<{ size: "small" | "medium" }>`
  width: ${({ size }) => (size === "small" ? `20px` : `24px`)};
  height: ${({ size }) => (size === "small" ? `20px` : `24px`)};
`;

const calculatePadding = (
  size: "small" | "medium",
  arrow?: boolean,
  disabled?: boolean
) => {
  const verticalPadding = disabled ? "8px" : "9px";
  const bottomPadding = disabled ? "10px" : "9px";
  const horizontalPaddingStart = size === "small" ? "24px" : "32px";
  let horizontalPaddingEnd = size === "small" ? "24px" : "32px";
  if (arrow) {
    horizontalPaddingEnd = size === "small" ? "16px" : "24px";
  }

  return `${verticalPadding} ${horizontalPaddingEnd} ${bottomPadding} ${horizontalPaddingStart}`;
};

const Button: React.FC<Props> = ({
  text,
  size,
  classification,
  disabled,
  arrow,
  onClick,
  color,
  className,
}) => {
  const ButtonContainer =
    classification === "primary"
      ? PrimaryButtonContainer
      : TertiaryButtonContainer;

  return (
    <ButtonContainer
      size={size}
      arrow={arrow}
      disabled={disabled}
      style={{ color }}
      onClick={!disabled ? onClick : undefined}
      className={className}
    >
      {size === "small" ? (
        <ButtonText>{text}</ButtonText>
      ) : (
        <Medium>{text}</Medium>
      )}
      {arrow && <StyledArrowIcon size={size} />}
    </ButtonContainer>
  );
};

export default Button;

